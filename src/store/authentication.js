import Immutable from 'immutable'
import { post } from 'utils/request'

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
