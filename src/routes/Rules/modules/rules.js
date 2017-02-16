import Immutable from 'immutable'
import { fetchFromAPI, SUCCESS } from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const UPDATE_PAGE = 'UPDATE_PAGE'
export const UPDATE_PER_PAGE = 'UPDATE_PER_PAGE'
export const INCREMENT_PAGE = 'INCREMENT_PAGE'
export const DECREMENT_PAGE = 'DECREMENT_PAGE'
export const REQUEST_RULES = 'REQUEST_RULES'
export const RECEIVE_RULES = 'RECEIVE_RULES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateSearch (search) {
  return {
    type: UPDATE_SEARCH,
    search
  }
}

export function updatePage (page) {
  return {
    type: UPDATE_PAGE,
    page
  }
}

export function updatePerPage (perpage) {
  return {
    type: UPDATE_PER_PAGE,
    perpage
  }
}

export function incrementPage () {
  return {
    type: INCREMENT_PAGE
  }
}

export function decrementPage () {
  return {
    type: DECREMENT_PAGE
  }
}

export function requestRules () {
  return {
    type    : REQUEST_RULES
  }
}

export function receiveRules (payload) {
  return {
    type    : RECEIVE_RULES,
    payload
  }
}

export const fetchRules = () => {
  return (dispatch, getState) => {
    dispatch(requestRules())

    const { search, page, perpage } = getState().rules.getIn(['result', 'payload']).toJS()

    dispatch(fetchFromAPI({
      scope: 'rule',
      method: 'read',
      payload: {
        search,
        page,
        perpage
      }
    }))
  }
}

export const actions = {
  updateSearch,
  updatePage,
  updatePerPage,
  incrementPage,
  decrementPage,
  requestRules,
  receiveRules,
  fetchRules
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_SEARCH] : (state, action) => state.setIn(['result', 'payload', 'search'], action.search),
  [UPDATE_PAGE] : (state, action) => state.setIn(['result', 'payload', 'page'], action.page),
  [UPDATE_PER_PAGE] : (state, action) => state.setIn(['result', 'payload', 'perpage'], action.perpage),
  [INCREMENT_PAGE] : (state, action) => state.updateIn(['result', 'payload', 'page'], page => page + 1),
  [DECREMENT_PAGE] : (state, action) => state.updateIn(['result', 'payload', 'page'], page => page - 1 || 1),
  [REQUEST_RULES]    : (state, action) => state,
  [SUCCESS] : (state, action) => action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  entities: {
    rules: []
  },
  result: {
    payload: {
      search: undefined,
      page: 1,
      perpage: 20,
      rules: []
    }
  }
})
export default function rulesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
