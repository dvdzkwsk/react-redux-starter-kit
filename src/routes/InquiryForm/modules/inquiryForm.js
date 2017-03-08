import Immutable from 'immutable'

import { get } from 'utils/request'

// ------------------------------------
// Constants
// ------------------------------------
export const NEW_INQUIRY_FORM = 'NEW_INQUIRY_FORM'

// ------------------------------------
// Actions
// ------------------------------------
export function updateActiveInquiries (inquiryForm) {
  return {
    type    : NEW_INQUIRY_FORM,
    payload : inquiryForm
  }
}

export const newInquiryForm = (email, password) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/inquiryForm', {
        query: {
          active: true
        },
        accessToken: getState().get('login').get('accessToken')
      })
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
  newInquiryForm
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [NEW_INQUIRY_FORM]: (state, { payload }) => {
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
