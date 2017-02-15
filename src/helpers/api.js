import { normalize, denormalize, schema } from 'normalizr'
import Immutable from 'immutable'
import adDirectorSchema from 'helpers/schema'
import 'whatwg-fetch'

// TODO replace with API middleware
const dev = true
const authorization = 'Basic ' + btoa('adops:5VUgoHIroKAscJhyPf')
const URL = dev ? 'http://ec2-54-147-204-2.compute-1.amazonaws.com:8000/manager/api/' : 'http://addir.vip.dailymotion.com/manager/api/'

export function apiRequest (bodyObject) {
  const body = JSON.stringify(bodyObject)

  return fetch(URL,
    {
      method: 'POST',
      body,
      headers: {
        'Authorization': authorization,
        'Content-Type': 'application/json'
      }
    })
		.then(response => response.json())
		.then(json => Immutable.fromJS(normalize(json, adDirectorSchema)))
		// .catch(error => console.error(error))
}

export function getRuleById (id) {
  console.log('getting rule', id)
  return apiRequest({
    scope: 'rule',
    method: 'read',
    payload: {
      id
    }
  })
}

export function postImmutableRule (immutable) {
  const payload = denormalize(immutable.get('result').toJS(), adDirectorSchema, immutable.get('entities').toJS()).payload
  const rule = payload.rule || payload.rules[0]

  return apiRequest({
    scope: 'rule',
    method: 'update',
    payload: {
      ...rule
    }
  })
}

export default apiRequest
