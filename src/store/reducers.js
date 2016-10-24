import { combineReducers } from 'redux'
import locationReducer from './location'

export const makeRootReducer = (asyncReducers, initialState) => {
  let missingReducers = { }
  if (initialState !== undefined && typeof initialState === 'object') {
    for (let key in initialState) {
      if (!asyncReducers.hasOwnProperty(key)) {
        missingReducers[key] = () => initialState[key]
      }
    }
  }
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
    ...missingReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
