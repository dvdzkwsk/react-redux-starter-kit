import Immutable from 'immutable'

import { get } from 'utils/request'

// ------------------------------------
// Constants
// ------------------------------------
export const ALL_SERVICES = 'ALL_SERVICES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateAllServices (inquiries) {
  return {
    type    : ALL_SERVICES,
    payload : inquiries
  }
}

export const getAllServices = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/categories')
      .then(function (response) {
        console.log(response)
        dispatch(updateAllServices(response))
        resolve()
      })
      .catch(function (error) {
        console.warn(error)
        resolve()
      })
    })
  }
}

export const actions = {
  getAllServices
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ALL_SERVICES]: (state, { payload }) => {
    return state.merge({
      allServices: payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.Map({
  allServices: []
})

export default function allServicesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
