export const PREFIX = 'user/'
export const FETCHED_USER_ID = `${PREFIX}FETCHED_USER_ID`

const USER_ACTION_HANDLERS = {
  [FETCHED_USER_ID]: (state, action) => ({ ...state, id: action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { id: null }
export default function userReducer (state = initialState, action) {
  const handler = USER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
