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
const initialState = { semesters: [
  { id: 1, name: '1. Semester' },
  { id: 2, name: '2. Semester' }
] }
export default function semestersReducer (state = initialState, action) {
  const handler = SEMESTERS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
