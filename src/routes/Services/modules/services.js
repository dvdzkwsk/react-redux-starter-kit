import { get } from 'utils/request'

// ------------------------------------
// Constants
// ------------------------------------
export const ALL_SERVICES = 'ALL_SERVICES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateActiveInquiries (inquiries) {
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
        dispatch(updateActiveInquiries(response))
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
    return {
      allServices: payload
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  allServices: []
}

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
