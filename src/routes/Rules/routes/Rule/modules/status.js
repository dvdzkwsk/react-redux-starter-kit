import Immutable from 'immutable'
import { RECEIVE_RULE, RECEIVE_UPDATED_RULE, CREATE_RULE } from './rule'

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

export const actions = {}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // TODO remove unneeded properties
  [RECEIVE_RULE] : (state, action) => initialState,
  [CREATE_RULE] : (state, action) => initialState,
  [RECEIVE_UPDATED_RULE] : (state, action) => action.payload.get('result', state)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({})

export default function statusReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
