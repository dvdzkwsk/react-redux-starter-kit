import fetch from 'isomorphic-fetch'
import { map, includes } from 'lodash'

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_PASSWORD = process.env.CLIENT_PASSWORD
const BASE_API = process.env.BASE_API

export function request (method, path, options = {}) {
  var query = options.query || {}
  var body = options.body || {}
  var headers = Object.assign({
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_PASSWORD}`)}`
  }, options.headers || {})

  if (options.accessToken) {
    Object.assign(headers, { 'X-Access-Token': options.accessToken })
  }

  var queryString = _.map(query, function (value, key) {
    return `${key}=${value}`
  }).join('&')

  return new Promise((resolve, reject) => {
    fetch(BASE_API + path + `?${queryString}`, {
      method: method,
      headers: headers,
      body: !_.isEmpty(body) && JSON.stringify(body)
    })
    .then(function (response) {
      if (includes([2, 3], parseInt(response.status.toString()[0]))) {
        resolve(response.json())
      }
      else {
        reject(response.json())
      }
    })
    .catch(function (error) {
      reject(error)
    })
  })
}

export function get (path, options) {
  return request('GET', path, options)
}

export function post (path, options) {
  return request('POST', path, options)
}
