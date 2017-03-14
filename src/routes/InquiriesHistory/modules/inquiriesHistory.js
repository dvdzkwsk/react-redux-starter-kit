import Immutable from 'immutable'

import { get } from 'utils/request'
import { normalize, updateEntities, inquirySchema } from 'store/entities'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_INACTIVE_INQUIRIES = 'UPDATE_INACTIVE_INQUIRIES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateInactiveInquiries (inquiriesHistory) {
  return {
    type    : UPDATE_INACTIVE_INQUIRIES,
    payload : inquiriesHistory
  }
}

export const getInactiveInquiries = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/inquiries', {
        query: {
          inactive: true
        },
        accessToken: getState().get('authentication').get('accessToken')
      })
      .then(function (response) {
        var normalizedInquiriesHistory = normalize(response, [inquirySchema])

        console.log(normalizedInquiriesHistory)

        dispatch(updateEntities(normalizedInquiriesHistory.entities))
        dispatch(updateInactiveInquiries(normalizedInquiriesHistory.result))
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
  getInactiveInquiries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_INACTIVE_INQUIRIES]: (state, { payload }) => {
    return state.merge({
      inactiveInquiries: payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  inactiveInquiries: []
})

export default function inactiveInquiriesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
