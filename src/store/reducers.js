import { combineReducers } from 'redux-immutable'
import routingReducer from './routing'
import authenticationReducer from './authentication'
import resourcesReducer from './resources'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing: routingReducer,
    authentication: authenticationReducer,
    resources: resourcesReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
