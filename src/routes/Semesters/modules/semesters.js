// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {}

const SEMESTERS_ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {  }
export default function semestersReducer (state = initialState, action) {
  const handler = SEMESTERS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
