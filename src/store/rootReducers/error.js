export const PREFIX = 'error/'
export const ERROR_OCCURRED = `${PREFIX}ERROR_OCCURRED`
export const REMOVE_ERROR_BY_INDEX = `${PREFIX}REMOVE_ERROR_BY_INDEX`

export const removeErrorByIndex = (index) => (dispatch, getState) => dispatch({
  type: REMOVE_ERROR_BY_INDEX,
  payload: index
})

const ERROR_ACTION_HANDLERS = {
  [ERROR_OCCURRED]: (state, action) => ([...state, action.payload]),
  [REMOVE_ERROR_BY_INDEX]: (state, action) => ([
    ...state.slice(0, action.payload),
    ...state.slice(action.payload + 1)])
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function errorReducer (state = initialState, action) {
  const handler = ERROR_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
