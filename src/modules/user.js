import { succType, failType } from '../utils/commonTools'
import { ajax } from '../modules/api'
import { browserHistory } from 'react-router'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

const API_URL = {
  SITE_LOGIN: '/aso/api/site/login'
}

export function login (username, password) {
  return ajax({
    url: API_URL.SITE_LOGIN,
    action: USER_LOGIN,
    method: 'POST',
    data: {
      username: username,
      pwd: password
    },
    succ:(json) => {
      browserHistory.push('/')
    }
  })
}

const initialState = {
  loading: false,
  msg: ''
}
export default function UserReducer (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { 'loading': true }
    case succType(USER_LOGIN):
      return action.payload.data
    case failType(USER_LOGIN):
      return Object.assign({}, initialState, { msg: action.payload })
    default:
      return state
  }
}
