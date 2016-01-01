import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const LOCALE_CHANGE = 'LOCALE_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export const localeChange = createAction(LOCALE_CHANGE, (value) => value)

export const actions = {
  localeChange
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [LOCALE_CHANGE]: (state, { payload }) => payload
}, 'en')
