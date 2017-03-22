import Immutable from 'immutable'

import { get } from 'utils/request'
import { normalize, updateEntities, inquirySchema } from 'store/entities'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_ACTIVE_INQUIRIES = 'UPDATE_ACTIVE_INQUIRIES'

export const UPDATE_INACTIVE_INQUIRIES = 'UPDATE_INACTIVE_INQUIRIES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateActiveInquiries (inquiries) {
  return {
    type    : UPDATE_ACTIVE_INQUIRIES,
    payload : inquiries
  }
}

export function updateInactiveInquiries (inquiriesHistory) {
  return {
    type    : UPDATE_INACTIVE_INQUIRIES,
    payload : inquiriesHistory
  }
}

export const getInquiries = (query) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/inquiries', {
        query: query,
        accessToken: getState().get('authentication').get('accessToken')
      })
      .then(function (response) {
        var normalizedInquiries = normalize(response, [inquirySchema])

        console.log(normalizedInquiries)

        dispatch(updateEntities(normalizedInquiries.entities))

        if (query.active) {
          dispatch(updateActiveInquiries(normalizedInquiries.result))
        }
        else if (query.inactive){
          dispatch(updateInactiveInquiries(normalizedInquiries.result))
        }

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
  getInquiries
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_ACTIVE_INQUIRIES]: (state, { payload }) => {
    return state.merge({
      activeInquiries: payload
    })
  },
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
  activeInquiries: [],
  inactiveInquiries: []
})

export default function inquiresReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
