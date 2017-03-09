import Immutable from 'immutable'

import { get } from 'utils/request'
import { addToInquiries } from 'store/resources'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_ACTIVE_INQUIRIES = 'UPDATE_ACTIVE_INQUIRIES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateActiveInquiries (inquiries) {
  return {
    type    : UPDATE_ACTIVE_INQUIRIES,
    payload : inquiries
  }
}

export const getActiveInquiries = (email, password) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/inquiries', {
        query: {
          active: true
        },
        accessToken: getState().get('authentication').get('accessToken')
      })
      .then(function (response) {
        console.log(response)
        response.forEach(inquiry => {
          dispatch(addToInquiries(inquiry))
        })
        dispatch(updateActiveInquiries(response.map(inquiry => inquiry.order_number)))
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
  getActiveInquiries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_ACTIVE_INQUIRIES]: (state, { payload }) => {
    return state.merge({
      activeInquiries: payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.Map({
  activeInquiries: []
})

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
