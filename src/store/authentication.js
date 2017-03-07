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

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_CURRENT_USER]: (state, { payload }) => {
    return {
      currentUser: payload.user
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

export default function authenticationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
