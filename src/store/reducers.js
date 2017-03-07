import { combineReducers } from 'redux-immutable'
import routingReducer from './routing'
import { default as loginReducer } from 'routes/Login/modules/login'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    routing: routingReducer,
    login: loginReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
