export const FETCHED_USER_ID = 'FETCHED_USER_ID'

const USER_ACTION_HANDLERS = {
  [FETCHED_USER_ID]: (state, action) => {
    return ({ ...state, id: action.payload.id })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { id: null }
export default function userReducer (state = initialState, action) {
  const handler = USER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
