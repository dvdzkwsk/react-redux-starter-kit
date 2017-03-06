import { browserHistory } from 'react-router'
import { deleteSemester } from './semestersData'
import fuzzysearch from 'fuzzysearch'

// ------------------------------------
// Constants
// ------------------------------------
export const PREFIX = 'semestersView/'

export const SWITCH_MODE = `${PREFIX}SWITCH_MODE`
export const SET_SELECTED_SEMESTER = `${PREFIX}SET_SELECTED_SEMESTER`
export const FILTER_SEMESTERS = `${PREFIX}FILTER_SEMESTERS`
export const TOGGLE_SEARCH_BAR = `${PREFIX}TOGGLE_SEARCH_BAR`

export const mode = {
  standard: 0, // switch to subject
  add: 1,      // add semester
  edit: 2,     // edit semester
  info: 3,     // info semester
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
export const filterSemesters = (filterValue = '') => (dispatch, getState) => {
  dispatch({
    type: FILTER_SEMESTERS,
    payload: {
      semesters: getState().semestersData.semesters,
      searchValue: filterValue
    }
  })
}

export const semesterClick = (semesterId) => (dispatch, getState) => {
  const currentMode = getState().semestersView.main.mode
  switch (currentMode) {
    case mode.add:
    case mode.edit:
    case mode.info:
      dispatch({ type: SET_SELECTED_SEMESTER, payload: semesterId })
      browserHistory.push(`/semester/${mode.properties[currentMode].uriName}${semesterId ? '/' + semesterId : ''}`)
      break
    case mode.remove:
      deleteSemester(semesterId)(dispatch, getState)
      break
    default:
      browserHistory.push(`/subjects/${semesterId}`)
      break
  }
}

export const modeButtonClick = (newMode) => (dispatch, getState) => {
  dispatch({
    type: SWITCH_MODE,
    // if new mode == current mode then set standard mode
    payload: newMode === getState().semestersView.main.mode ? mode.standard : newMode
  })
}

export const searchButtonClick = () => (dispatch, getState) => {
  dispatch({ type: TOGGLE_SEARCH_BAR })

  const state = getState()
  if (!state.semestersView.main.showSearchBar) {
    dispatch({ type: FILTER_SEMESTERS, payload: { semesters: state.semestersData.semesters, searchValue: '' } })
  }
}

export const actions = {}

const SEMESTERS_ACTION_HANDLERS = {
  [SWITCH_MODE]: (state, action) => ({ ...state, mode: action.payload }),
  [SET_SELECTED_SEMESTER]: (state, action) => ({ ...state, selectedSemester: state.filteredSemesters.find((semester) => semester.id == action.payload) }),
  [FILTER_SEMESTERS]: (state, action) => ({ ...state, filteredSemesters: action.payload.semesters.filter((semester) => fuzzysearch(action.payload.searchValue, semester.name)) }),
  [TOGGLE_SEARCH_BAR]: (state, action) => ({ ...state, showSearchBar: !state.showSearchBar })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  filteredSemesters: [],
  selectedSemester: {},
  mode: mode.standard,
  showSearchBar: false
}
export default function semestersReducer (state = initialState, action) {
  const handler = SEMESTERS_ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
