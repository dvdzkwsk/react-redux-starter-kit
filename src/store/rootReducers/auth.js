export const AUTH_SUCCESS = 'AUTH_SUCCESS'

const AUTH_ACTION_HANDLERS = {
  [AUTH_SUCCESS]: (state, action) => {
    return ({ ...state, authToken: action.payload.authToken })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { authToken: null }
export default function authReducer (state = initialState, action) {
  const handler = AUTH_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
