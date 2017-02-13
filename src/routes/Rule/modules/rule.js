import Immutable from 'immutable'
import apiRequest from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const UPDATE_CONDITION_DIMENSION = 'UPDATE_CONDITION_DIMENSION'
export const UPDATE_CONDITION_OP = 'UPDATE_CONDITION_OP'
export const UPDATE_CONDITION_VALUE = 'UPDATE_CONDITION_VALUE'
export const ADD_CONDITION = 'ADD_CONDITION'
export const REQUEST_RULE = 'REQUEST_RULE'
export const RECEIVE_RULE = 'RECEIVE_RULE'

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

export function updateConditionDimension ({ id, dimension }) {
  return {
    type    : UPDATE_CONDITION_DIMENSION,
    id,
    dimension
  }
}

export function updateConditionOp ({ id, op }) {
  return {
    type    : UPDATE_CONDITION_OP,
    id,
    op
  }
}

export function updateConditionValue ({ id, value }) {
  return {
    type    : UPDATE_CONDITION_VALUE,
    id,
    value
  }
}

export function addCondition (id) {
  return {
    type    : ADD_CONDITION,
    id
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

    getRule(id)
    .then(rule => {
      dispatch(receiveRule(rule))
    })
  }
}

function getRule (id) {
  return apiRequest({
    scope: 'rule',
    method: 'read',
    payload: {
      id
    }
  })
}

export const actions = {
  updateDescription,
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  addCondition,
  requestRule,
  receiveRule,
  fetchRule
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_DESCRIPTION]    : (state, action) => state.setIn(['entities', 'rules', action.id, 'description'], action.description),
  [UPDATE_CONDITION_DIMENSION] : (state, action) => state.setIn(['entities', 'conditions', action.id, 'dimension'], action.dimension),
  [UPDATE_CONDITION_OP] : (state, action) => state.setIn(['entities', 'conditions', action.id, 'op'], action.op),
  [UPDATE_CONDITION_VALUE] : (state, action) => state.setIn(['entities', 'conditions', action.id, 'value'], action.value),
  [ADD_CONDITION] : (state, action) => {
    const id = `${action.id}_${Date.now()}`
    let temp = state.setIn(['entities', 'conditions', id], Immutable.Map({dimension: 'context.domain', op: true, value: []}))
    temp = temp.updateIn(['entities', 'rules', action.id, 'conditions'], c => c.push(id))
    return temp
  },
  [REQUEST_RULE]    : (state, action) => state,
  [RECEIVE_RULE] : (state, action) => action.rule
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  entities: {
    rules: {
      new: {
        description: undefined,
        conditions: [],
        actions: []
      }
    }
  }
})

export default function ruleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
