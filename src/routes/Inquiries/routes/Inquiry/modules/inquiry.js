import Immutable from 'immutable'

import { get, put } from 'utils/request'
import { normalize, updateEntities, inquirySchema } from 'store/entities'

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
        var normalizedInquiry = normalize(response, inquirySchema)

        console.log(normalizedInquiry)

        dispatch(updateEntities(normalizedInquiry.entities))
        dispatch(updateInquiry(normalizedInquiry.result))
        resolve()
      })
      .catch(function (error) {
        console.warn(error)
        resolve()
      })
    })
  }
}

export const cancelInquiry = (id) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      put('/inquiries/' + id + '/cancel', {
        accessToken: getState().get('authentication').get('accessToken')
      })
      .then(function (response) {
        var normalizedInquiry = normalize(response, inquirySchema)

        console.log(normalizedInquiry)

        dispatch(updateEntities(normalizedInquiry.entities))
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
