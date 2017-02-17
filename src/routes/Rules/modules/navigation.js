import Immutable from 'immutable'
import { fetchFromAPI } from 'helpers/api'
import { RECEIVE_RULES } from './rules'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const UPDATE_PAGE = 'UPDATE_PAGE'
export const UPDATE_PER_PAGE = 'UPDATE_PER_PAGE'
export const INCREMENT_PAGE = 'INCREMENT_PAGE'
export const DECREMENT_PAGE = 'DECREMENT_PAGE'

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

export const actions = {
  updateSearch,
  updatePage,
  updatePerPage,
  incrementPage,
  decrementPage
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_SEARCH] : (state, action) => state.set('search', action.search),
  [UPDATE_PAGE] : (state, action) => state.set('page', action.page),
  [UPDATE_PER_PAGE] : (state, action) => state.set('perpage', action.perpage),
  [INCREMENT_PAGE] : (state, action) => state.update('page', page => page + 1),
  [DECREMENT_PAGE] : (state, action) => state.update('page', page => page - 1 || 1),
  [RECEIVE_RULES] : (state, action) => action.payload.getIn(['result', 'payload'], state)
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  search: undefined,
  page: 1,
  perpage: 20,
  rules: []
})

export default function navigationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
