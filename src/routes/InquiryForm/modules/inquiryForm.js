import Immutable from 'immutable'

import { get } from 'utils/request'

// ------------------------------------
// Constants
// ------------------------------------
export const NEW_INQUIRY_FORM = 'NEW_INQUIRY_FORM'
export const CHECK_PROMO_CODE = 'CHECK_PROMO_CODE'

// ------------------------------------
// Actions
// ------------------------------------
export function updateService (inquiryForm) {
  return {
    type    : NEW_INQUIRY_FORM,
    payload : inquiryForm
  }
}

export function checkPromoCode (checkPromo) {
  return {
    type    : CHECK_PROMO_CODE,
    payload : checkPromo
  }
}

export const getService = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/services/3')
      .then(function (response) {
        console.log(response)
        dispatch(updateService(response))
        resolve()
      })
      .catch(function (error) {
        console.warn(error)
        resolve()
      })
    })
  }
}

export const getPromoCode = (code) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/promo_codes/' + code)
      .then(function (response) {
        console.log(response)
        dispatch(checkPromoCode(response))
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
  getService,
  getPromoCode
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [NEW_INQUIRY_FORM]: (state, { payload }) => {
    return state.merge({
      callService: payload
    })
  },
  [CHECK_PROMO_CODE]: (state, { payload }) => {
    return state.merge({
      promoCode: payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  callService: {},
  promoCode: {}
})

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
