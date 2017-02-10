export const PREFIX = 'actionBar/'
export const SEARCH_VALUE_CHANGED = `${PREFIX}SEARCH_VALUE_CHANGED`

export const searchValueChanged = (event, newValue, previousValue) => (dispatch, getState) => dispatch({
  type: SEARCH_VALUE_CHANGED,
  payload: newValue
})

const SEMESTERS_ACTION_HANDLERS = {
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  selecteModeIndex: null,
  searchMode: false
}
export default function semestersReducer (state = initialState, action) {
  const handler = SEMESTERS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
