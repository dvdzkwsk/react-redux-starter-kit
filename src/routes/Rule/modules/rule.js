import Immutable from 'immutable'
import { fetchFromAPI, convertRequest } from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const CREATE_RULE = 'CREATE_RULE'
export const REQUEST_RULE = 'REQUEST_RULE'
export const RECEIVE_RULE = 'RECEIVE_RULE'
export const POST_RULE = 'POST_RULE'
export const RECEIVE_UPDATED_RULE = 'RECEIVE_UPDATED_RULE'
export const RECEIVE_ERROR = 'RECEIVE_ERROR'

// ------------------------------------
// Actions
// ------------------------------------

export function updateDescription ({ id, description }) {
  return {
    type    : UPDATE_DESCRIPTION,
    id,
    description
  }
}

export function createRule () {
  return {
    type : CREATE_RULE
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

export function receiveError (error) {
  return {
    type : RECEIVE_ERROR,
    error
  }
}

export const fetchRule = (id) => {
  return fetchFromAPI({
    scope: 'rule',
    method: 'read',
    payload: {
      id
    }
  }, [
    REQUEST_RULE,
    RECEIVE_RULE
  ]
  )
}

export function postRule (rule) {
  return fetchFromAPI({
    scope: 'rule',
    method: 'update',
    payload: rule
  }, [
    POST_RULE,
    RECEIVE_RULE
  ]
  )
}

export function receiveUpdatedRule (rule) {
  return {
    type    : RECEIVE_UPDATED_RULE,
    rule
  }
}

export const updateRule = () => {
  return (dispatch, getState) => {
    const { payload } = convertRequest(getState().rule)
    const rule = payload.rule || payload.rules[0]

    dispatch(postRule(rule))
  }
}

export const actions = {
  updateDescription,
  createRule,
  requestRule,
  receiveRule,
  fetchRule,
  postRule,
  updateRule,
  receiveUpdatedRule,
  receiveError
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_DESCRIPTION] : (state, action) => state.setIn(['entities', 'rules', action.id, 'description'], action.description),
  [CREATE_RULE] : (state, action) => initialState,
  [REQUEST_RULE] : (state, action) => state,
  [RECEIVE_RULE] : (state, action) => action.payload.getIn(['entities', 'rules']),
  // TODO add reducer for error results
  [POST_RULE] : (state, action) => state,
  // TODO update path id when rule is updated
  [RECEIVE_UPDATED_RULE] : (state, action) => action.rule.mergeDeep(initialState),
  [RECEIVE_ERROR] : (state, action) => state.mergeDeep(action.error)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({})
const createState = Immutable.fromJS({

})

export default function ruleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
