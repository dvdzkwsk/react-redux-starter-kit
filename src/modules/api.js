import 'isomorphic-fetch'
import { browserHistory } from 'react-router'
import { serialize, succType, failType } from '../utils/commonTools'
import _ from 'lodash'
export const API_AJAX = 'API_AJAX'

const API_ROOT = __PREFIX__

const initConf = {
  credentials: 'include',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}
const getRealPath = (path) => {
  return path.match('^(http|https)://') ? path : API_ROOT + path
}

export function ajax (args) {
  const { url, method, headers, data, action, succ } = args
  return function (dispatch, getState) {
    dispatch({ type: API_AJAX })
    dispatch({ type: action })
    let fullUrl = getRealPath(url)
    let options = _.cloneDeep(initConf)
    if (method) { options.method = method }
    if (data) { options.body = data }
    if (headers) { options.headers = Object.assign({}, options.headers, headers) }
    if (options.body) {
      switch (options.headers['Content-Type']) {
        case 'application/x-www-form-urlencoded':
          options.body = serialize(options.body)
          break
        default:
          options.body = JSON.stringify(options.body)
      }
    }
    fetch(fullUrl, options)
      .then(response => response.json())
      .then((json) => {
        switch (json.code) {
          case 200:
            dispatch({ type: succType(API_AJAX) })
            dispatch({ type: succType(action), payload: json })
            return json
          case 401:
            browserHistory.push('/login')
            throw new Error(json.msg)
          default:
            throw new Error(json.msg)
        }
      })
      .then((json) => {
        if (_.isFunction(succ)) {
          succ(json, dispatch)
        }
      })
      .catch((e) => {
        dispatch({ type: failType(API_AJAX), payload: e.message })
        dispatch({ type: failType(action), payload: e.message })
      })
  }
}

export default function ReportReducer (state = { loading: false }, action) {
  switch (action.type) {
    case API_AJAX:
      return Object.assign({}, { loading: true })
    case succType(API_AJAX):
    case failType(API_AJAX):
      return Object.assign({}, { loading: false })
    default:
      return state
  }
}

