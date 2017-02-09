export const PREFIX = 'semestersSearchBar/'
export const SEARCH_VALUE_CHANGED = `${PREFIX}SEARCH_VALUE_CHANGED`

export const searchValueChanged = (event, newValue, previousValue) => (dispatch, getState) => dispatch({
  type: SEARCH_VALUE_CHANGED,
  payload: newValue
})
