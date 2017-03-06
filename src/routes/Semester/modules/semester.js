import axios from 'axios'
import { browserHistory } from 'react-router'
import { semesterChanged } from '../../Semesters/modules/semestersData'
import { ERROR_OCCURRED } from '../../../store/rootReducers/error'

// ------------------------------------
// Actions
// ------------------------------------

export const updateSemester = (values, dispatch) => (dispatch, getState) => axios.put(
  'semesters',
  JSON.stringify({ ...values, userId: getState().user.id })
)

export const updateSucceed = (result, dispatch) => {
  dispatch(semesterChanged(result.data))
  browserHistory.goBack()
  return result.data
}

export const updateFailed = (errors, dispatch, submitError) => dispatch({
  type: ERROR_OCCURRED,
  payload: submitError
})

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
