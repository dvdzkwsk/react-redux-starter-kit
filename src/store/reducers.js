import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    ...asyncReducers })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
