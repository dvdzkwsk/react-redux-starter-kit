import apiRequest from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const REQUEST_RULE = 'REQUEST_RULE'
export const RECEIVE_RULE = 'RECEIVE_RULE'

// ------------------------------------
// Actions
// ------------------------------------

export function updateDescription (description) {
  return {
    type    : UPDATE_DESCRIPTION,
    description
  }
}

export function requestRule () {
  return {
    type    : REQUEST_RULE
  }
}

export function receiveRule (rule) {
  return {
    type    : RECEIVE_RULE,
    rule
  }
}

export const fetchRule = (id) => {
  return (dispatch, getState) => {
    dispatch(requestRule())

    return apiRequest({
      scope: 'rule',
      method: 'read',
      payload: {
        id
      }
    })
    .then(({payload, status, error}) => {
      dispatch(receiveRule(payload.rules[0]))
    })
  }
}

export const actions = {
  updateDescription,
  requestRule,
  receiveRule,
  fetchRule
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_DESCRIPTION]    : (state, action) => ({...state, description: action.description}),
  [REQUEST_RULE]    : (state, action) => state,
  [RECEIVE_RULE] : (state, action) => ({...state, ...action.rule})
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  description: "",
  conditions: [],
  actions: []
}
export default function ruleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
