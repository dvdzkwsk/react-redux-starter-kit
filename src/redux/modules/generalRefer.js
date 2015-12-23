import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const GENERAL_FORM_OPEN_MODAL = 'GENERAL_FORM_OPEN_MODAL'

// ------------------------------------
// Actions
// ------------------------------------
export const actions = {
  open: createAction(GENERAL_FORM_OPEN_MODAL)
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  GENERAL_FORM_OPEN_MODAL: (state, { payload }) => ({ ...state, isOpen: !state.isOpen })
}, { isOpen: false })
