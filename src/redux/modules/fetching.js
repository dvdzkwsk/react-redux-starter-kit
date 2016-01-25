import { createAction, handleActions } from 'redux-actions'

export const BEGIN_FETCHING = 'BEGIN_FETCHING'
export const END_FETCHING = 'END_FETCHING'

export const fetch = createAction(BEGIN_FETCHING, () => true)
export const endFetch = createAction(END_FETCHING, () => false)

export const actions = { fetch, endFetch }

export default handleActions({
  [BEGIN_FETCHING]: (state, { payload }) => payload,
  [END_FETCHING]: (state, { payload }) => payload
}, false)
