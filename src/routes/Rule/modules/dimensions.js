import Immutable from 'immutable'
import apiRequest from 'helpers/api'

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
  return (dispatch, getState) => {
    dispatch(requestDimensions())

    getDimensions(id)
    .then(dimensions => {
      dispatch(receiveDimensions(dimensions))
    })
  }
}

function getDimensions (id) {
  return apiRequest({
    scope: 'dimension',
    method: 'read'
  })
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
  [RECEIVE_DIMENSIONS] : (state, action) => action.dimensions
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  entities: {
    dimensions: []
  }
})

export default function dimensionsReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
