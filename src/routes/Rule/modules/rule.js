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
export const DELETE_CONDITION = 'DELETE_CONDITION'
export const UPDATE_ACTION_TYPE = 'UPDATE_ACTION_TYPE'
export const UPDATE_ACTION_RANK = 'UPDATE_ACTION_RANK'
export const UPDATE_ACTION_YIELD = 'UPDATE_ACTION_YIELD'
export const DELETE_ACTION = 'DELETE_ACTION'
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

export function deleteCondition ({ id, ruleId }) {
  return {
    type    : DELETE_CONDITION,
    id,
    ruleId
  }
}

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

export function deleteAction ({ id, ruleId }) {
  return {
    type    : DELETE_ACTION,
    id,
    ruleId
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
  deleteCondition,
  updateActionType,
  updateActionRank,
  updateActionYield,
  deleteAction,
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
    let temp = state.setIn(
      ['entities', 'conditions', id],
      Immutable.Map({
        dimension: 'context.domain',
        op: true,
        value: [],
        ruleId: action.id
      }))
    temp = temp.updateIn(
      ['entities', 'rules', action.id, 'conditions'],
      c => c.push(id)
    )
    return temp
  },
  [DELETE_CONDITION] : (state, action) => {
    let temp = state.updateIn(
      ['entities', 'rules', action.ruleId, 'conditions'],
      conditions => conditions.filterNot(id => id === action.id)
    )
    temp = temp.deleteIn(['entities', 'conditions', action.id])
    return temp
  },
  [UPDATE_ACTION_TYPE] : (state, action) => state.setIn(['entities', 'actions', action.id, 'type'], action._type),
  [UPDATE_ACTION_RANK] : (state, action) => state.setIn(['entities', 'actions', action.id, 'rank'], action.rank),
  [UPDATE_ACTION_YIELD] : (state, action) => state.setIn(['entities', 'actions', action.id, 'yield'], action._yield),
  [DELETE_ACTION] : (state, action) => {
    let temp = state.updateIn(
      ['entities', 'rules', action.ruleId, 'actions'],
      actions => actions.filterNot(id => id === action.id)
    )
    temp = temp.deleteIn(['entities', 'actions', action.id])
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
