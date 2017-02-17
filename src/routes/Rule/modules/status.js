import Immutable from 'immutable'
import { RECEIVE_RULE } from './rule'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_STATUS = 'UPDATE_STATUS'

// ------------------------------------
// Actions
// ------------------------------------

// TODO see if this function is required
export function updateStatus ({ status, error }) {
  return {
    type    : UPDATE_STATUS,
    status,
    error
  }
}

export const actions = {
  updateStatus
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  // TODO remove unneeded properties
  [RECEIVE_RULE] : (state, action) => action.payload.get('result', state)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({})

export default function statusReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
