import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

export const reducers = (asyncReducers) => {
  return combineReducers({ router, ...asyncReducers })
}

export const injectReducer = (store, name, asyncReducer) => {
  store.asyncReducers[name] = asyncReducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
