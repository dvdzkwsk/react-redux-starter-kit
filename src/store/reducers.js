import { combineReducers } from 'redux'
import reducers from './rootReducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...reducers,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
