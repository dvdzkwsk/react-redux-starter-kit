import apiRequest from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SEARCH = 'UPDATE_SEARCH'
export const UPDATE_PAGE = 'UPDATE_PAGE'
export const UPDATE_PER_PAGE = "UPDATE_PER_PAGE"
export const REQUEST_RULES = 'REQUEST_RULES'
export const RECEIVE_RULES = 'RECEIVE_RULES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateSearch(search) {
  return {
    type: UPDATE_SEARCH,
    search
  }
}

export function updatePage(page) {
  return {
    type: UPDATE_PAGE,
    page
  }
}

export function updatePerPage(perpage) {
  return {
    type: UPDATE_PER_PAGE,
    perpage
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

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const fetchRules = () => {
  return (dispatch, getState) => {
    dispatch(requestRules())

    const {search, page, perpage} = getState().rules

    return apiRequest({
      scope: 'rule',
      method: 'read',
      payload: {
        search,
        page,
        perpage
      }
    })
    .then(({payload, status, error}) => {
      dispatch(receiveRules(payload))
    })
  }
}

export const actions = {
  updateSearch,
  updatePage,
  updatePerPage,
  requestRules,
  receiveRules,
  fetchRules
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_SEARCH] : (state, action) => ({...state, search: action.search}),
  [UPDATE_PAGE] : (state, action) => ({...state, page: action.page}),
  [UPDATE_PER_PAGE] : (state, action) => ({...state, perpage: action.perpage}),
  [REQUEST_RULES]    : (state, action) => state,
  [RECEIVE_RULES] : (state, action) => ({...state, ...action.payload})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  rules: [],
  search: undefined,
  maxpage: undefined,
  page: 1,
  perpage: 20
}
export default function rulesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
