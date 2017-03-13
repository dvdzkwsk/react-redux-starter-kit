import Immutable from 'immutable'

import { get } from 'utils/request'
import { normalize, updateEntities, categorySchema } from 'store/entities'

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES'

// ------------------------------------
// Actions
// ------------------------------------
export function updateCategories (categories) {
  return {
    type    : UPDATE_CATEGORIES,
    payload : categories
  }
}

export const getCategories = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      get('/categories')
      .then(function (response) {
        var normalizedCategories = normalize(response, [categorySchema])

        console.log(normalizedCategories)

        dispatch(updateEntities(normalizedCategories.entities))
        dispatch(updateCategories(normalizedCategories.result))
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
  updateCategories
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_CATEGORIES]: (state, { payload }) => {
    return state.merge({
      categories: payload
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = Immutable.fromJS({
  categories: []
})

export default function servicesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
