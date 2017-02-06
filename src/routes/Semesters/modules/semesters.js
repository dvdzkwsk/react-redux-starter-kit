import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_INITIAL_SEMESTER_DATA = 'FETCH_INITIAL_SEMESTER_DATA'
export const FETCH_INITIAL_SEMESTER_DATA_PENDING = `${FETCH_INITIAL_SEMESTER_DATA}_PENDING`
export const FETCH_INITIAL_SEMESTER_DATA_FULFILLED = `${FETCH_INITIAL_SEMESTER_DATA}_FULFILLED`
export const FETCH_INITIAL_SEMESTER_DATA_REJECTED = `${FETCH_INITIAL_SEMESTER_DATA}_REJECTED`

export const SEMESTER_DATA_FETCHED = 'SEMESTER_DATA_FETCHED'

export const ADD_NEW_SEMESTER = 'ADD_NEW_SEMESTER'
export const SWITCH_SEMESTERS_MODE = 'SWITCH_SEMESTERS_MODE'

export const mode = {
  standard: 0, // switch to subject
  add: 1,      // add semester
  edit: 2,     // edit semester
  info: 3,      // info semester
  remove: 4,   // remove semester
  properties: {
    1: {uriName: "add"},
    2: {uriName: "edit"},
    3: {uriName: "info"}
  }
}

// ------------------------------------
// Actions
// ------------------------------------


export const switchSemestersMode  = (mode) => (dispatch, getState) => () => dispatch({
  type: SWITCH_SEMESTERS_MODE,
  payload: mode
})

export const fetchInitialSemesterData = (promise) => ({
  type: FETCH_INITIAL_SEMESTER_DATA,
  payload: promise
})

export const semesterDataFetched = (semesters) => ({
  type: SEMESTER_DATA_FETCHED,
  payload: { semesters }
})

export const loadSemesters = (store) => {
  const { dispatch } = store
  dispatch(fetchInitialSemesterData(
    axios
      .get('semesters')
      .then((response) => dispatch(semesterDataFetched(response.data)))
  ))
}

export const actions = {
  loadSemesters,
  switchSemestersMode
}

const SEMESTERS_ACTION_HANDLERS = {
  [FETCH_INITIAL_SEMESTER_DATA_PENDING]: (state) => ({ ...state, fetching: true }),
  [FETCH_INITIAL_SEMESTER_DATA_FULFILLED]: (state) => ({ ...state, fetching: false }),
  [FETCH_INITIAL_SEMESTER_DATA_REJECTED]: (state) => ({ ...state, fetching: false }),

  [SEMESTER_DATA_FETCHED]: (state, action) => ({ ...state, semesters: action.payload.semesters }),

  [SWITCH_SEMESTERS_MODE]: (state, action) => ({ ...state, mode: action.payload })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { semesters: [], currentSemester: {}, mode: mode.standard }
export default function semestersReducer (state = initialState, action) {
  const handler = SEMESTERS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
