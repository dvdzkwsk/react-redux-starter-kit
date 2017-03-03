import fetch from 'isomorphic-fetch'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const LOGIN = 'LOGIN'

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
      fetch('https://api-beta.seekster.co/users/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa('seekster-web:MF/Ez09QytEdI5pw0DtOdTip7zJzlM+ZGX6BVLzrJkBDe5wukUPeBFvMandUsDDzOAyFoE9LrRhbsrzETMEDRw==')}`
        },
        body: JSON.stringify({
          email: email,
          password: password,
          devices_attributes: {
            client_type: 'web'
          }
        })
      })
      .then(function (response) {
        return response.json()
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

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
