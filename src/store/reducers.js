import { combineReducers } from 'redux'
import { SiderData } from '../layouts/App/containers/Sider/reducers'
import location from './location'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    SiderData,
    location,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer