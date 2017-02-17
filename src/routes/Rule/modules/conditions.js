import Immutable from 'immutable'
import { RECEIVE_RULE, CREATE_RULE } from './rule'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_CONDITION_DIMENSION = 'UPDATE_CONDITION_DIMENSION'
export const UPDATE_CONDITION_OP = 'UPDATE_CONDITION_OP'
export const UPDATE_CONDITION_VALUE = 'UPDATE_CONDITION_VALUE'
export const ADD_CONDITION = 'ADD_CONDITION'
export const DELETE_CONDITION = 'DELETE_CONDITION'

// ------------------------------------
// Actions
// ------------------------------------

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

export function deleteCondition ({ id, ruleId }) {
  return {
    type    : DELETE_CONDITION,
    id,
    ruleId
  }
}

export function addCondition (ruleId) {
  return {
    type    : ADD_CONDITION,
    ruleId
  }
}

export const actions = {
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  deleteCondition,
  addCondition
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_RULE] : (state, action) => action.payload.getIn(['entities', 'conditions'], state),
  [CREATE_RULE] : (state, action) => initialState,
  [UPDATE_CONDITION_DIMENSION] : (state, action) => state.setIn([action.id, 'dimension'], action.dimension),
  [UPDATE_CONDITION_OP] : (state, action) => state.setIn([action.id, 'op'], action.op),
  [UPDATE_CONDITION_VALUE] : (state, action) => state.setIn([action.id, 'value'], action.value),
  [DELETE_CONDITION] : (state, action) => state.delete(action.id),
  [ADD_CONDITION] : (state, action) => state.set(`${action.ruleId}_${Date.now()}`, defaultCondition.set('ruleId', action.ruleId))
}

// ------------------------------------
// Reducer
// ------------------------------------
const defaultCondition = Immutable.fromJS({
  dimension: 'context.domain',
  op: true,
  value: []
})
const initialState = Immutable.fromJS({})

export default function conditionsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
