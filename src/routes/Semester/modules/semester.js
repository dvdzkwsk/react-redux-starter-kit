import axios from 'axios'
import { browserHistory } from 'react-router'
import { UPDATE_SEMESTER } from '../../Semesters/modules/semesters'
import { ERROR_OCCURRED } from '../../../store/rootReducers/error'

// ------------------------------------
// Actions
// ------------------------------------

export const updateSemester = () => (dispatch, getState) => {
  const data = JSON.stringify({ ...getState().form.semesterForm.values, userId: getState().user.id })

  dispatch({
    type: UPDATE_SEMESTER,
    payload: axios
      .put('semesters', data)
      .then((response) => {
        //TODO filter again
        browserHistory.goBack();
        return response.data
      })
      .catch((err) => {
        dispatch({ type: ERROR_OCCURRED, payload: err })
        throw err
      })
  })
}

export const actions = {}

const SEMESTER_ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { }
export default function semesterReducer (state = initialState, action) {
  const handler = SEMESTER_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
