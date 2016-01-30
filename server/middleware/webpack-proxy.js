// Code copied from https://github.com/popomore/koa-proxy
// Copyright (c) 2014 popomore. Licensed under the MIT license.

'use strict'

var join = require('url').resolve
var iconv = require('iconv-lite')
var request = require('co-request').defaults({ jar: true })

module.exports = function (options) {
  options || (options = {})

  if (!(options.host || options.map || options.url)) {
    throw new Error('miss options')
  }

  return function * proxy (next) {
    // CHANGE from original (popmore, Oct. 9, 2015, da449f7b1d746d7443908b9a43eb4bf447467f5c)
    var path = this.originalUrl
    var url = resolve(path, options)

    // don't match
    if (!url) {
      return yield* next
    }

    // if match option supplied, restrict proxy to that match
    if (options.match) {
      if (!path.match(options.match)) {
        return yield* next
      }
    }

    var parsedBody = getParsedBody(this)

    var opt = {
      url: url + '?' + this.querystring,
      headers: this.header,
      encoding: null,
      method: this.method,
      body: parsedBody
    }
    // set 'Host' header to options.host (without protocol prefix)
    if (options.host) opt.headers.host = options.host.slice(options.host.indexOf('://') + 3)

    var requestThunk = request(opt)

    var res
    if (parsedBody) {
      res = yield requestThunk
    } else {
      // Is there a better way?
      // https://github.com/leukhin/co-request/issues/11
      res = yield pipeRequest(this.req, requestThunk)
    }

    this.status = res.statusCode
    for (var name in res.headers) {
      this.set(name, res.headers[name])
    }

    if (options.encoding === 'gbk') {
      this.body = iconv.decode(res.body, 'gbk')
      return
    }

    this.body = res.body
  }
}

function resolve (path, options) {
  var url = options.url
  if (url) {
    if (!/^http/.test(url)) {
      url = options.host ? join(options.host, url) : null
    }
    return ignoreQuery(url)
  }

  if (typeof options.map === 'object') {
    if (options.map && options.map[path]) {
      path = ignoreQuery(options.map[path])
    }
  } else if (typeof options.map === 'function') {
    path = options.map(path)
  }

  return options.host ? join(options.host, path) : null
}

function ignoreQuery (url) {
  return url ? url.split('?')[0] : null
}

function getParsedBody (ctx) {
  var body = ctx.request.body
  if (body === undefined || body === null) {
    return undefined
  }
  var contentType = ctx.request.header['content-type']
  if (!Buffer.isBuffer(body) && typeof body !== 'string') {
    if (contentType && contentType.indexOf('json') !== -1) {
      body = JSON.stringify(body)
    } else {
      body = body + ''
    }
  }
  return body
}

function pipeRequest (readable, requestThunk) {
  return function (cb) {
    readable.pipe(requestThunk(cb))
  }
}
