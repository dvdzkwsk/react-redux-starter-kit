import axios from 'axios'
import { browserHistory } from 'react-router'
import { ERROR_OCCURRED } from '../../../store/rootReducers/error'
import { CHANGE, DESTROY } from 'redux-form/lib/actionTypes'
import fuzzysearch from 'fuzzysearch'

// ------------------------------------
// Constants
// ------------------------------------
export const PREFIX = 'semesters/'
export const FETCH_INITIAL_DATA = `${PREFIX}FETCH_INITIAL_DATA`
export const FETCH_INITIAL_DATA_PENDING = `${FETCH_INITIAL_DATA}_PENDING`
export const FETCH_INITIAL_DATA_FULFILLED = `${FETCH_INITIAL_DATA}_FULFILLED`
export const FETCH_INITIAL_DATA_REJECTED = `${FETCH_INITIAL_DATA}_REJECTED`

export const SWITCH_MODE = `${PREFIX}SWITCH_MODE`

export const SET_SELECTED_SEMESTER = `${PREFIX}SET_SELECTED_SEMESTER`
export const DELETE_SEMESTER = `${PREFIX}DELETE_SEMESTER`

export const SEARCH_BUTTON_CLICKED = `${PREFIX}SEARCH_BUTTON_CLICKED`

export const mode = {
  standard: 0, // switch to subject
  add: 1,      // add semester
  edit: 2,     // edit semester
  info: 3,      // info semester
  remove: 4,   // remove semester
  properties: {
    1: { uriName: 'add' },
    2: { uriName: 'edit' },
    3: { uriName: 'info' }
  }
}

// ------------------------------------
// Actions
// ------------------------------------

export const setSelectedSemester = (semesterId) => ({
  type: SET_SELECTED_SEMESTER,
  payload: semesterId
})

export const semesterClick = (semesterId) => (dispatch, getState) => {
  const currentMode = getState().semesters.mode
  switch (currentMode) {
    case mode.add:
    case mode.edit:
    case mode.info:
      dispatch(setSelectedSemester(semesterId))
      browserHistory.push(`semester/${mode.properties[currentMode].uriName}${semesterId ? '/' + semesterId : ''}`)
      break
    case mode.remove:
      dispatch({
        type: DELETE_SEMESTER,
        payload: axios
          .delete(`semesters/${semesterId}`)
          .catch((err) => {
            dispatch({ type: ERROR_OCCURRED, payload: err })
            throw err
          })
      })
      dispatch({ type: DELETE_SEMESTER, payload: semesterId })
      break
    default:
      browserHistory.push(`subjects?semesterId=${semesterId}`)
      break
  }
}

export const modeButtonClick = (newMode) => (dispatch, getState) => {
  dispatch({
    type: SWITCH_MODE,
    // if new mode == current mode then set standard mode
    payload: newMode === getState().semesters.mode ? mode.standard : newMode
  })
}

export const searchButtonClick = () => (dispatch, getState) => dispatch({ type: SEARCH_BUTTON_CLICKED })

export const loadSemesters = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_INITIAL_DATA,
    payload: axios
      .get(`users/${getState().user.id}/semesters`)
      .catch((err) => {
        dispatch({ type: ERROR_OCCURRED, payload: err })
        throw err
      })
  })
}

export const actions = {
  loadSemesters
}

const SEMESTERS_ACTION_HANDLERS = {
  [FETCH_INITIAL_DATA_PENDING]: (state) => ({ ...state, fetching: true }),
  [FETCH_INITIAL_DATA_FULFILLED]: (state, action) => ({
    ...state,
    semesters: action.payload.data,
    filteredSemesters: action.payload.data,
    fetching: false,
    fetched: true
  }),
  [FETCH_INITIAL_DATA_REJECTED]: (state) => ({ ...state, fetching: false }),

  [SWITCH_MODE]: (state, action) => ({ ...state, mode: action.payload }),
  [SET_SELECTED_SEMESTER]: (state, action) => ({
    ...state,
    selectedSemester: state.filteredSemesters.find((semester) => semester.id == action.payload)
  }),

  [DELETE_SEMESTER]: (state, action) => ({ ...state, filteredSemesters: state.filteredSemesters.filter((semester) => semester.id != action.payload) }),

  [CHANGE]: (state, action) => action.meta.field === 'searchSemesterField' ? {
    ...state,
    filteredSemesters: state.semesters.filter((semester) => fuzzysearch(action.payload, semester.name))
  } : state,
  [DESTROY]: (state, action) => action.meta.form.find((formId) => formId === 'searchBarForm') ? {
    ...state,
    filteredSemesters: state.semesters
  } : state,
  [SEARCH_BUTTON_CLICKED]: (state, action) => ({ ...state, showSearchBar: !state.showSearchBar })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  semesters: [],
  filteredSemesters: [],
  selectedSemester: {},
  mode: mode.standard,
  fetching: false,
  fetched: false,
  showSearchBar: false
}
export default function semestersReducer (state = initialState, action) {
  const handler = SEMESTERS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
