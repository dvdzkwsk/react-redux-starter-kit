import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const OPEN_MODAL = 'OPEN_MODAL'

// ------------------------------------
// Actions
// ------------------------------------
export const open = createAction(OPEN_MODAL)

export const actions = {
  open
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  OPEN_MODAL: (state, { payload }) => !state
}, false)
