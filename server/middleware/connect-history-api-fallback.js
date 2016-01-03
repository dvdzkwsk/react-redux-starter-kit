import url from 'url'

export default function koaConnectHistoryApiFallback (options) {
  options = options || {}
  const logger = getLogger(options)

  return function* koaConnectHistoryApiFallbackMiddleware (next) {
    const ctx = this
    const {headers} = ctx

    if (ctx.method !== 'GET') {
      logger(
        'Not rewriting',
        ctx.method,
        ctx.url,
        'because the method is not GET.'
      )
      return yield* next
    } else if (!headers || typeof headers.accept !== 'string') {
      logger(
        'Not rewriting',
        ctx.method,
        ctx.url,
        'because the client did not send an HTTP accept header.'
      )
      return yield* next
    } else if (headers.accept.indexOf('application/json') === 0) {
      logger(
        'Not rewriting',
        ctx.method,
        ctx.url,
        'because the client prefers JSON.'
      )
      return yield* next
    } else if (!acceptsHtml(headers.accept)) {
      logger(
        'Not rewriting',
        ctx.method,
        ctx.url,
        'because the client does not accept HTML.'
      )
      return yield* next
    }

    const parsedUrl = url.parse(ctx.url)
    const rewrites = options.rewrites || []
    let rewriteTarget

    for (var i = 0; i < rewrites.length; i++) {
      const rewrite = rewrites[i]
      const match = parsedUrl.pathname.match(rewrite.from)

      if (match !== null) {
        rewriteTarget = evaluateRewriteRule(parsedUrl, match, rewrite.to)
        logger('Rewriting', ctx.method, ctx.url, 'to', rewriteTarget)
        ctx.url = rewriteTarget
        return yield* next
      }
    }

    if (~parsedUrl.pathname.indexOf('.')) {
      logger(
        'Not rewriting',
        ctx.method,
        ctx.url,
        'because the path includes a dot (.) character.'
      );
      return yield* next
    }

    rewriteTarget = options.index || '/index.html'
    logger('Rewriting', ctx.method, ctx.url, 'to', rewriteTarget)
    ctx.url = rewriteTarget
    yield next
  }
}

const evaluateRewriteRule = (parsedUrl, match, rule) => {
  if (typeof rule === 'string') {
    return rule
  } else if (typeof rule !== 'function') {
    throw new Error('Rewrite rule can only be of type string of function.')
  }

  return rule({
    parsedUrl: parsedUrl,
    match: match
  })
}

const acceptsHtml = (header) =>
  header.indexOf('text/html') !== -1 || header.indexOf('*/*') !== -1

const getLogger = (opts) => {
  return (
    opts && opts.logger ? opts.logger :
    opts && opts.verbose ? ::console.log :
    () => {}
  )
}
