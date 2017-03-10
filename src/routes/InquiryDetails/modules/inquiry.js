import Immutable from 'immutable'

import { get } from 'utils/request'
import { updateEntities } from 'store/entities'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_INQUIRY = 'UPDATE_INQUIRY'

// ------------------------------------
// Actions
// ------------------------------------
export function updateInquiry (inquiry) {
  return {
    type    : UPDATE_INQUIRY,
    payload : inquiry
  }
}

export const getInquiry = (id) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch(updateInquiry(id))

      get('/inquiries/' + id, {
        accessToken: getState().get('authentication').get('accessToken')
      })
      .then(function (response) {
        // dispatch(addToInquiries(response))
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
  updateInquiry
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_INQUIRY]: (state, { payload }) => {
    return state.merge({
      inquiry: payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  inquiry: null
})

export default function inquiryReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
