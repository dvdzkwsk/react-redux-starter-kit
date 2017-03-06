export const PREFIX = 'user/'
export const FETCHED_USER = `${PREFIX}FETCHED_USER`
export const USER_LOGOUT = `${PREFIX}_REMOVE_USER`

const USER_ACTION_HANDLERS = {
  [FETCHED_USER]: (state, action) => ({ ...state, ...action.payload }),
  [USER_LOGOUT]: (state, action) => ({ })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { }
export default function userReducer (state = initialState, action) {
  const handler = USER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
