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

export function requestDimensions () {
  return {
    type    : REQUEST_DIMENSIONS
  }
}

export function receiveDimensions (dimensions) {
  return {
    type    : RECEIVE_DIMENSIONS,
    dimensions
  }
}

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

function getDimensions (id) {
}

export const actions = {
  requestDimensions,
  receiveDimensions,
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
