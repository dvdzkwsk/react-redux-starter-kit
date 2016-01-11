import thunk from 'redux-thunk'
import { syncHistory } from 'redux-simple-router'
import rootReducer from './rootReducer'
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux'

export default function configureStore (initialState, history) {
  let createStoreWithMiddleware
  const middleware = applyMiddleware(syncHistory(history), thunk)

  if (__DEBUG__) {
    createStoreWithMiddleware = compose(
      middleware,
      window.devToolsExtension
        ? window.devToolsExtension()
        : require('containers/DevTools').default.instrument()
    )
  } else {
    createStoreWithMiddleware = compose(middleware)
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  )
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
