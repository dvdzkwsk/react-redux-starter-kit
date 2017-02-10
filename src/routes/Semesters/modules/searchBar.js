import { FILTER_SEMESTERS } from './semestersMainView'

export const searchValueChanged = (event, newValue, previousValue) => (dispatch, getState) => dispatch({
  type: FILTER_SEMESTERS,
  payload: {
    semesters: getState().semestersData.semesters,
    searchValue: newValue
  }
})
