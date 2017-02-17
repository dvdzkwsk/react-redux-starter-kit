import { CALL_API } from 'redux-api-middleware'
import { normalize, denormalize, schema } from 'normalizr'
import Immutable from 'immutable'
import adDirectorSchema from 'helpers/schema'
import 'whatwg-fetch'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'
const authorization = 'Basic ' + btoa(`${__API_USER__}:${__API_KEY__}`)
const endpoint = __PROD__ ? __PROD_API_BASE__ : __DEV_API_BASE__

export const fetchFromAPI = (body,
  [requestType = REQUEST, successType = SUCCESS, failureType = FAILURE] = [REQUEST, SUCCESS, FAILURE]) => {
  return {
    [CALL_API]: {
      endpoint,
      method: 'POST',
      body: JSON.stringify(body),
      types: [
        requestType,
        {
          type: successType,
          payload: (action, state, response) => {
            return response.json()
            .then(json => convertResponse(json))
          }
        },
        failureType
      ],
      headers: {
        'Authorization': authorization,
        'Content-Type': 'application/json'
      }
    }
  }
}

export const convertResponse = response => Immutable.fromJS(normalize(response, adDirectorSchema))
//export const convertRequest = request => denormalize(request.get('result').toJS(), adDirectorSchema, request.get('entities').toJS())

export default fetchFromAPI
