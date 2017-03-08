import Immutable from 'immutable'
import { fetchFromAPI } from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION'
export const CREATE_RULE = 'CREATE_RULE'
export const EDIT_RULE = 'EDIT_RULE'
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

export function receiveError (error) {
  return {
    type : RECEIVE_ERROR,
    error
  }
}

export function editRule (rule) {
  return {
    type: EDIT_RULE,
    rule
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
    RECEIVE_UPDATED_RULE
  ]
  )
}

/* export function receiveUpdatedRule (rule) {
  return {
    type    : RECEIVE_UPDATED_RULE,
    rule
  }
} */

export const updateRule = () => {
  return (dispatch, getState) => {
    const { rule, conditions, actions } = getState()

    let denormalized = rule.withMutations(r => {
      r.set('conditions', conditions.filter(
        c => c.get('ruleId') === r.get('id')
      )
      .map(c => c.delete('ruleId'))
      .toList())
      .set('actions', actions.filter(
        a => a.get('ruleId') === r.get('id')
      )
      .map(a => a.delete('ruleId'))
      .toList())
    })

    if (denormalized.get('id') === 'new') {
      denormalized = denormalized.delete('id')
    }

    dispatch(postRule(denormalized.toJS()))
  }
}

export const actions = {
  updateDescription,
  createRule,
  fetchRule,
  postRule,
  updateRule,
  receiveError
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_DESCRIPTION] : (state, action) => state.set('description', action.description),
  [CREATE_RULE] : (state, action) => createState,
  [REQUEST_RULE] : (state, action) => state,
  [RECEIVE_RULE] : (state, action) => action.payload.getIn(['entities', 'rules']).first(),
  [EDIT_RULE] : (state, action) => action.id,
  [POST_RULE] : (state, action) => state,
  // TODO update path id when rule is updated?
  [RECEIVE_UPDATED_RULE] : (state, action) => (
    action.payload.getIn(['result', 'status']) === 'error'
    ? state
    : action.payload.getIn(['entities', 'rules']).first()
  ),
  [RECEIVE_ERROR] : (state, action) => state.mergeDeep(action.error)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({})
const createState = Immutable.fromJS({
  id: 'new',
  description: ''
})

export default function ruleReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
