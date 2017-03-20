import Immutable from 'immutable'

import { get } from 'utils/request'
import { request, post } from 'utils/request'
import { push } from 'react-router-redux'
import { normalize, updateEntities, serviceSchema } from 'store/entities'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_SERVICE = 'UPDATE_SERVICE'
export const CHECK_PROMO_CODE = 'CHECK_PROMO_CODE'

// ------------------------------------
// Actions
// ------------------------------------
export function updateService (service) {
  return {
    type    : UPDATE_SERVICE,
    payload : service
  }
}

export function updatePromoCode (checkPromo) {
  return {
    type    : CHECK_PROMO_CODE,
    payload : checkPromo
  }
}

export const getService = (slug) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch(updateService(slug))

      get('/services/' + slug)
      .then(function (response) {
        var normalizedService = normalize(response, serviceSchema)

        console.log(normalizedService)

        dispatch(updateEntities(normalizedService.entities))
        dispatch(updateService(normalizedService.result))
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
        dispatch(updatePromoCode(response))
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
  [UPDATE_SERVICE]: (state, { payload }) => {
    return state.merge({
      service: payload
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
  service: {},
  promoCode: {}
})

export default function inquiryFormReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
