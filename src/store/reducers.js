import { combineReducers } from 'redux-immutable'
import routingReducer from './routing'
import authenticationReducer from './authentication'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing: routingReducer,
    authentication: authenticationReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
