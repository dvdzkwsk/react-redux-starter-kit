import Immutable from 'immutable'
import { request, post } from 'utils/request'
import { push } from 'react-router-redux'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const UPDATE_ACCESS_TOKEN = 'UPDATE_ACCESS_TOKEN'

// ------------------------------------
// Actions
// ------------------------------------
export function updateCurrentUser (user) {
  return {
    type    : UPDATE_CURRENT_USER,
    payload : user
  }
}

export function updateAccessToken (accessToken) {
  return {
    type    : UPDATE_ACCESS_TOKEN,
    payload : accessToken
  }
}

export const login = (email, password) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      post('/users/sessions', {
        body: {
          email: email,
          password: password,
          devices_attributes: {
            client_type: 'web'
          }
        }
      })
      .then(function (response) {
        console.log(response)

        dispatch(updateCurrentUser(response.user))
        dispatch(updateAccessToken(response.access_token))

        dispatch(push('/dashboard'))

        resolve()
      })
    })
  }
}

export const logout = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      request('DELETE', '/users/sessions', {
        body: {
          client_type: 'web'
        },
        accessToken: getState().get('authentication').get('accessToken')
      })
      .then(function (response) {
        console.log(response)

        dispatch(updateCurrentUser(null))
        dispatch(updateAccessToken(null))

        dispatch(push('/login'))

        resolve()
      })
    })
  }
}

export const actions = {
  login
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_CURRENT_USER]: (state, { payload }) => {
    return state.merge({
      currentUser: payload
    })
  },
  [UPDATE_ACCESS_TOKEN]: (state, { payload }) => {
    return state.merge({
      accessToken: payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.Map()

export default function authenticationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
