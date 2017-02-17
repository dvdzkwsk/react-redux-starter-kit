import Immutable from 'immutable'
import { fetchFromAPI } from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_RULES = 'REQUEST_RULES'
export const RECEIVE_RULES = 'RECEIVE_RULES'
export const REQUEST_DELETE_RULE = 'REQUEST_DELETE_RULE'
export const RECEIVE_DELETE_RULE = 'RECEIVE_DELETE_RULE'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchRules = (payload) => {
  return fetchFromAPI({
    scope: 'rule',
    method: 'read',
    payload
  }, [
    REQUEST_RULES,
    RECEIVE_RULES
  ])
}

export const deleteRule = (id) => {
  return fetchFromAPI({
    scope: 'rule',
    method: 'delete',
    payload: {
      id
    }
  }, [
    REQUEST_DELETE_RULE,
    RECEIVE_DELETE_RULE
  ])
}

export const actions = {
  fetchRules,
  deleteRule
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_RULES] : (state, action) => state,
  [RECEIVE_RULES] : (state, action) => action.payload.getIn(['entities', 'rules'], state),
  [REQUEST_DELETE_RULE] : (state, action) => state,
  [RECEIVE_DELETE_RULE] : (state, action) => {
    const status = action.payload.getIn(['result', 'status'])
    const id = action.payload.getIn(['result', 'payload', 'rule'])

    return status === 'ok' ? state.setIn([id, 'disabled'], true) : state
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({})

export default function rulesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
