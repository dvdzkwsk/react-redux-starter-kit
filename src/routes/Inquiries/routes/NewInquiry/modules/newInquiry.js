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
export const UPDATE_SERVICE_IS_LOADING = 'UPDATE_SERVICE_IS_LOADING'

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

export function updateServiceIsLoading (value) {
  return {
    type    : UPDATE_SERVICE_IS_LOADING,
    payload : value
  }
}

export const getService = (slug) => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      dispatch(updateService(slug))
      dispatch(updateServiceIsLoading(true))

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
        dispatch(updateServiceIsLoading(false))
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
  },
  [UPDATE_SERVICE_IS_LOADING]: (state, { payload }) => {
    return state.merge({
      isLoading: payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  service: {},
  promoCode: {},
  isLoading: false
})

export default function inquiryFormReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
