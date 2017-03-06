export const PREFIX = 'auth/'
export const FETCHED_AUTH_TOKEN = `${PREFIX}FETCHED_AUTH_TOKEN`
export const AUTH_LOGOUT = `${PREFIX}AUTH_LOGOUT`

const AUTH_ACTION_HANDLERS = {
  [FETCHED_AUTH_TOKEN]: (state, action) => ({ ...state, authToken: action.payload }),
  [AUTH_LOGOUT]: (state, action) => ({ })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { authToken: null }
export default function authReducer (state = initialState, action) {
  const handler = AUTH_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
