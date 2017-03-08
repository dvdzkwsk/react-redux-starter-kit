import Immutable from 'immutable'
import { RECEIVE_RULES } from './rules'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SEARCH = 'UPDATE_SEARCH'

// ------------------------------------
// Actions
// ------------------------------------
export function updateSearch (search) {
  return {
    type: UPDATE_SEARCH,
    search
  }
}

export const actions = {
  updateSearch
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_SEARCH] : (state, action) => state.set('search', action.search),
  // TODO tell Guy or Pyke that it may be useful to return the search in the payload
  [RECEIVE_RULES] : (state, action) => (
    action.payload.getIn(['result', 'payload'], state).set('search', state.get('search'))
  )
}
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  search: undefined,
  page: 1,
  perpage: 20,
  maxpage: undefined,
  rules: []
})

export default function navigationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
