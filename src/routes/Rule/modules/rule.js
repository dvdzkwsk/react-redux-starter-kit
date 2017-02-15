import Immutable from 'immutable'
import { getRuleById, postImmutableRule } from 'helpers/api'

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
export const UPDATE_ACTION_VALUE = 'UPDATE_ACTION_VALUE'
export const ADD_ACTION = 'ADD_ACTION'
export const DELETE_ACTION = 'DELETE_ACTION'
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

export function addCondition (id) {
  return {
    type    : ADD_CONDITION,
    id
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

export function addAction (id) {
  return {
    type    : ADD_ACTION,
    id
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
  return (dispatch, getState) => {
    dispatch(requestRule())

    getRuleById(id)
    .then(rule => {
      dispatch(receiveRule(rule))
    })
  }
}

export function postRule () {
  return {
    type    : POST_RULE
  }
}

export function receiveUpdatedRule (rule) {
  return {
    type    : RECEIVE_UPDATED_RULE,
    rule
  }
}

export const updateRule = () => {
  return (dispatch, getState) => {
    dispatch(postRule())

    postImmutableRule(getState().rule)
    .then(rule => {
      const isError = rule.getIn(['result', 'status']) === 'error'

      if (isError) {
        dispatch(receiveError(rule))
      }
      else {
        dispatch(receiveUpdatedRule(rule))
      }
    })
  }
}

export const actions = {
  updateDescription,
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  deleteCondition,
  addCondition,
  updateActionType,
  updateActionRank,
  updateActionYield,
  updateActionValue,
  deleteAction,
  addAction,
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
  [UPDATE_CONDITION_DIMENSION] : (state, action) => state.setIn(['entities', 'conditions', action.id, 'dimension'], action.dimension),
  [UPDATE_CONDITION_OP] : (state, action) => state.setIn(['entities', 'conditions', action.id, 'op'], action.op),
  [UPDATE_CONDITION_VALUE] : (state, action) => state.setIn(['entities', 'conditions', action.id, 'value'], action.value),
  [DELETE_CONDITION] : (state, action) => (
    state.updateIn(
      ['entities', 'rules', action.ruleId, 'conditions'],
      conditions => conditions.filterNot(id => id === action.id)
    )
    .deleteIn(['entities', 'conditions', action.id])
  ),
  [ADD_CONDITION] : (state, action) => {
    const id = `${action.id}_${Date.now()}`

    return state.setIn(
      ['entities', 'conditions', id],
      Immutable.fromJS({
        dimension: 'context.domain',
        op: true,
        value: [],
        ruleId: action.id
      }))
    .updateIn(
      ['entities', 'rules', action.id, 'conditions'],
      c => c.push(id)
    )
  },
  [UPDATE_ACTION_TYPE] : (state, action) => (
    state.setIn(['entities', 'actions', action.id, 'type'], action._type)
    .updateIn(['entities', 'actions', action.id, 'value'], v => v.clear())
  ),
  [UPDATE_ACTION_RANK] : (state, action) => state.setIn(['entities', 'actions', action.id, 'rank'], action.rank),
  [UPDATE_ACTION_YIELD] : (state, action) => state.setIn(['entities', 'actions', action.id, 'yield'], action._yield),
  [UPDATE_ACTION_VALUE] : (state, action) => {
    return state.setIn(['entities', 'actions', action.id, 'value', action.key], action.value)
  },
  [DELETE_ACTION] : (state, action) => (
    state.updateIn(
      ['entities', 'rules', action.ruleId, 'actions'],
      actions => actions.filterNot(id => id === action.id)
    )
    .deleteIn(['entities', 'actions', action.id])
  ),
  [ADD_ACTION] : (state, action) => {
    const id = `${action.id}_${Date.now()}`

    return state.setIn(
      ['entities', 'actions', id],
      Immutable.fromJS({
        type: 'capping',
        rank: 100,
        yield: 100,
        value: {},
        ruleId: action.id
      }))
    .updateIn(
      ['entities', 'rules', action.id, 'actions'],
      a => a.push(id)
    )
  },
  [CREATE_RULE] : (state, action) => initialState,
  [REQUEST_RULE] : (state, action) => state,
  [RECEIVE_RULE] : (state, action) => action.rule.mergeDeep(initialState),
  [POST_RULE] : (state, action) => state,
  // TODO update path id when rule is updated
  [RECEIVE_UPDATED_RULE] : (state, action) => action.rule.mergeDeep(initialState),
  [RECEIVE_ERROR] : (state, action) => state.mergeDeep(action.error)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  entities: {
    rules: {
      new: {
        id: 'new',
        description: '',
        conditions: [],
        actions: []
      }
    },
    actions: {},
    conditions: {}
  },
  result: {}
})

export default function ruleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
