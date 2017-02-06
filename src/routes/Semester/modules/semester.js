import axios from 'axios'
import { browserHistory } from 'react-router'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SEMESTER = 'UPDATE_SEMESTER'

// ------------------------------------
// Actions
// ------------------------------------

export const updateSemester = () => (dispatch, getState) => {
  const data = JSON.stringify(getState().form.semesterForm.values)

  dispatch({
    type: UPDATE_SEMESTER,
    payload: axios
      .put('semesters', data)
      .then((response) => browserHistory.goBack())
  })
}

export const actions = {}

const SEMESTER_ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { currentSemester: {} }
export default function semesterReducer (state = initialState, action) {
  const handler = SEMESTER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
