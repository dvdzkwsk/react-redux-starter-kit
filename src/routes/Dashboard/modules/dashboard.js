import Immutable from 'immutable'

import { get } from 'utils/request'
import { normalize, updateEntities, inquirySchema } from 'store/entities'

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

export const getActiveInquiries = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/inquiries', {
        query: {
          active: true
        },
        accessToken: getState().get('authentication').get('accessToken')
      })
      .then(function (response) {
        var normalizedInquiries = normalize(response, [inquirySchema])

        console.log(normalizedInquiries)

        dispatch(updateEntities(normalizedInquiries.entities))
        dispatch(updateActiveInquiries(normalizedInquiries.result))
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
const initialState = Immutable.fromJS({
  activeInquiries: []
})

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
