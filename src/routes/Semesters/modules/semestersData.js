import axios from 'axios'
import { ERROR_OCCURRED } from '../../../store/rootReducers/error'
import { FILTER_SEMESTERS, filterSemesters } from './semestersMainView'

// ------------------------------------
// Constants
// ------------------------------------
export const PREFIX = 'semesters/'
export const FETCH_INITIAL_DATA = `${PREFIX}FETCH_INITIAL_DATA`
export const FETCH_INITIAL_DATA_PENDING = `${FETCH_INITIAL_DATA}_PENDING`
export const FETCH_INITIAL_DATA_FULFILLED = `${FETCH_INITIAL_DATA}_FULFILLED`
export const FETCH_INITIAL_DATA_REJECTED = `${FETCH_INITIAL_DATA}_REJECTED`

export const SEMESTER_CHANGED = `${PREFIX}SEMESTER_CHANGED`
export const DELETE_SEMESTER = `${PREFIX}DELETE_SEMESTER`

// ------------------------------------
// Actions
// ------------------------------------

export const loadSemesters = () => (dispatch, getState) => {
  dispatch({ type: FETCH_INITIAL_DATA_PENDING })
  axios
    .get(`users/${getState().user.id}/semesters`)
    .then((response) => {
      dispatch({ type: FETCH_INITIAL_DATA_FULFILLED, payload: response.data })
      dispatch({ type: FILTER_SEMESTERS, payload: { semesters: getState().semestersData.semesters, searchValue: '' } })
      return response
    })
    .catch((err) => {
      dispatch({ type: FETCH_INITIAL_DATA_REJECTED, payload: err })
      dispatch({ type: ERROR_OCCURRED, payload: err })
      throw err
    })
}

export const deleteSemester = (semesterId) => (dispatch, getState) => {
  dispatch({ type: DELETE_SEMESTER, payload: semesterId })

  const state = getState()
  dispatch({
    type: FILTER_SEMESTERS,
    payload: {
      semesters: state.semestersData.semesters,
      searchValue: state.form.searchBarForm ? state.form.searchBarForm.values.searchSemesterField : ''
    }
  })

  axios
    .delete(`semesters/${semesterId}`)
    .catch((err) => {
      dispatch({ type: ERROR_OCCURRED, payload: err })
      throw err
    })
}

export const semesterChanged = (semester) => (dispatch) => {
  dispatch({ type: SEMESTER_CHANGED, payload: semester })
  dispatch(filterSemesters())
}

export const actions = {}

const SEMESTERS_ACTION_HANDLERS = {
  [FETCH_INITIAL_DATA_PENDING]: (state) => ({ ...state, fetching: true }),
  [FETCH_INITIAL_DATA_FULFILLED]: (state, action) => ({ ...state, semesters: action.payload, fetching: false, fetched: true }),
  [FETCH_INITIAL_DATA_REJECTED]: (state) => ({ ...state, fetching: false }),

  [SEMESTER_CHANGED]: (state, action) => ({ ...state, semesters: [ ...state.semesters.filter((semester) => semester.id != action.payload.id), action.payload ] }),
  [DELETE_SEMESTER]: (state, action) => ({ ...state, semesters: state.semesters.filter((semester) => semester.id != action.payload) })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  semesters: [],
  fetching: false,
  fetched: false
}

export default function semestersReducer (state = initialState, action) {
  const handler = SEMESTERS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
