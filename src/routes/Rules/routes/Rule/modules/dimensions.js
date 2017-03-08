import Immutable from 'immutable'
import { fetchFromAPI } from 'helpers/api'

// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_DIMENSIONS = 'REQUEST_DIMENSIONS'
export const RECEIVE_DIMENSIONS = 'RECEIVE_DIMENSIONS'

// ------------------------------------
// Actions
// ------------------------------------

export const fetchDimensions = (id) => {
  return fetchFromAPI({
    scope: 'dimension',
    method: 'read'
  },
    [
      REQUEST_DIMENSIONS,
      RECEIVE_DIMENSIONS
    ]
  )
}

export const actions = {
  fetchDimensions
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [REQUEST_DIMENSIONS]    : (state, action) => state,
  [RECEIVE_DIMENSIONS] : (state, action) => action.payload.getIn(['entities', 'dimensions'], state)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({})

export default function dimensionsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
