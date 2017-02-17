import Immutable from 'immutable'
import { fetchFromAPI } from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_RULES = 'REQUEST_RULES'
export const RECEIVE_RULES = 'RECEIVE_RULES'

// ------------------------------------
// Actions
// ------------------------------------

export function requestRules () {
  return {
    type    : REQUEST_RULES
  }
}

export function receiveRules (payload) {
  return {
    type    : RECEIVE_RULES,
    payload
  }
}

export const fetchRules = () => {
  return (dispatch, getState) => {
    const { search, page, perpage } = getState().navigation.toJS()

    dispatch(fetchFromAPI({
      scope: 'rule',
      method: 'read',
      payload: {
        search,
        page,
        perpage
      }
    },
    [
      REQUEST_RULES,
      RECEIVE_RULES
    ]
    ))
  }
}

export const actions = {
  requestRules,
  receiveRules,
  fetchRules
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_RULES] : (state, action) => state,
  [RECEIVE_RULES] : (state, action) => action.payload.getIn(['entities', 'rules'], state)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({})

export default function rulesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
