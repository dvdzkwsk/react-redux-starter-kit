import { combineReducers } from 'redux'

// ========================================================
// Internal reducer for location
// ========================================================
const locationState = {
  location: window.location || null
}

export const locationReducer = (state = locationState, action) => {
  return action.type === 'LOCATION_CHANGE'
    ? action.location
    : state
}

// ========================================================
// Render Setup
// ========================================================
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
