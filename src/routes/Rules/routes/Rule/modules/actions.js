import Immutable from 'immutable'
import { RECEIVE_RULE, RECEIVE_UPDATED_RULE, CREATE_RULE } from './rule'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_ACTION_TYPE = 'UPDATE_ACTION_TYPE'
export const UPDATE_ACTION_RANK = 'UPDATE_ACTION_RANK'
export const UPDATE_ACTION_YIELD = 'UPDATE_ACTION_YIELD'
export const UPDATE_ACTION_VALUE = 'UPDATE_ACTION_VALUE'
export const DELETE_ACTION = 'DELETE_ACTION'
export const ADD_ACTION = 'ADD_ACTION'

// ------------------------------------
// Actions
// ------------------------------------

export function updateActionType ({ id, _type }) {
  return {
    type    : UPDATE_ACTION_TYPE,
    id,
    _type
  }
}

export function updateActionRank ({ id, rank }) {
  return {
    type    : UPDATE_ACTION_RANK,
    id,
    rank
  }
}

export function updateActionYield ({ id, _yield }) {
  return {
    type    : UPDATE_ACTION_YIELD,
    id,
    _yield
  }
}
export function updateActionValue ({ id, key, value }) {
  return {
    type    : UPDATE_ACTION_VALUE,
    id,
    key,
    value
  }
}

export function deleteAction ({ id, ruleId }) {
  return {
    type    : DELETE_ACTION,
    id,
    ruleId
  }
}

export function addAction (ruleId) {
  return {
    type    : ADD_ACTION,
    ruleId
  }
}

export const actions = {
  updateActionType,
  updateActionRank,
  updateActionYield,
  updateActionValue,
  deleteAction,
  addAction
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [RECEIVE_RULE] : (state, action) => action.payload.getIn(['entities', 'actions'], state),
  [RECEIVE_UPDATED_RULE] : (state, action) => action.payload.getIn(['entities', 'actions'], state),
  [CREATE_RULE] : (state, action) => initialState,
  [UPDATE_ACTION_TYPE] : (state, action) => (
    state.setIn([action.id, 'type'], action._type)
    .updateIn([action.id, 'value'], v => v.clear())
  ),
  [UPDATE_ACTION_RANK] : (state, action) => state.setIn([action.id, 'rank'], action.rank),
  [UPDATE_ACTION_YIELD] : (state, action) => state.setIn([action.id, 'yield'], action._yield),
  [UPDATE_ACTION_VALUE] : (state, action) => state.setIn([action.id, 'value', action.key], action.value),
  [DELETE_ACTION] : (state, action) => state.delete(action.id),
  [ADD_ACTION] : (state, action) => (
    state.set(`${action.ruleId}_${Date.now()}`, defaultAction.set('ruleId', action.ruleId))
  )
}

// ------------------------------------
// Reducer
// ------------------------------------
const defaultAction = Immutable.fromJS({
  type: 'capping',
  rank: 100,
  yield: 100,
  value: {}
})
const initialState = Immutable.fromJS({})

export default function actionsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
