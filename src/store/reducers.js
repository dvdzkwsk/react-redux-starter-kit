import { combineReducers } from 'redux'
import { REHYDRATE } from 'redux-persist/constants'
import locationReducer from './location'
import apiReducer from '../modules/api'

export const makeRootReducer = (asyncReducers) => {
  return (state = null, action) => {
    return action.type === REHYDRATE
      ? action.payload
      : combineReducers({
        location: locationReducer,
        api: apiReducer,
        ...asyncReducers
      })(state, action)
  }
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
