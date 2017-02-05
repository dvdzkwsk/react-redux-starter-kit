import axios from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_INITIAL_SEMESTER_DATA = 'FETCH_INITIAL_SEMESTER_DATA'
export const FETCH_INITIAL_SEMESTER_DATA_PENDING = `${FETCH_INITIAL_SEMESTER_DATA}_PENDING`
export const FETCH_INITIAL_SEMESTER_DATA_FULFILLED = `${FETCH_INITIAL_SEMESTER_DATA}_FULFILLED`
export const FETCH_INITIAL_SEMESTER_DATA_REJECTED = `${FETCH_INITIAL_SEMESTER_DATA}_REJECTED`

export const SEMESTER_DATA_FETCHED = 'SEMESTER_DATA_FETCHED'

// ------------------------------------
// Actions
// ------------------------------------
export const fetchInitialSemesterData = (promise) => ({
  type: FETCH_INITIAL_SEMESTER_DATA,
  payload: promise
})

export const semesterDataFetched = (semesters) => ({
  type: SEMESTER_DATA_FETCHED,
  payload: { semesters }
})

export const loadSemesters = (store) => {
    store.dispatch(fetchInitialSemesterData(
      axios
        .get('semesters')
        .then((response) => store.dispatch(semesterDataFetched(response.data)))
    ))
}

export const actions = {
  loadSemesters
}

const SEMESTERS_ACTION_HANDLERS = {
  [FETCH_INITIAL_SEMESTER_DATA_PENDING]: (state) => ({ ...state, fetching: true }),
  [FETCH_INITIAL_SEMESTER_DATA_FULFILLED]: (state) => ({ ...state, fetching: false }),
  [FETCH_INITIAL_SEMESTER_DATA_REJECTED]: (state) => ({ ...state, fetching: false }),
  [SEMESTER_DATA_FETCHED]: (state, action) => ({ ...state, semesters: action.payload.semesters })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { semesters: [] }
export default function semestersReducer (state = initialState, action) {
  const handler = SEMESTERS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
