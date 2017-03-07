import { post } from 'utils/request'
import { locationChange } from 'store/location'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'

// ------------------------------------
// Actions
// ------------------------------------
export function updateCurrentUser (user, accessToken) {
  return {
    type    : UPDATE_CURRENT_USER,
    payload : { user, accessToken }
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
        dispatch(updateCurrentUser(response.user, response.access_token))
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
    return {
      currentUser: payload.user,
      accessToken: payload.accessToken
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  currentUser: null,
  accessToken: null
}

export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
