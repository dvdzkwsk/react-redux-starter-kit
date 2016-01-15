import thunk from 'redux-thunk'
import { syncHistory } from 'redux-simple-router'
import rootReducer from './rootReducer'
import { applyMiddleware, compose, createStore } from 'redux'

export default initialState => history => {
  let createStoreWithMiddleware

  const syncedHistory = syncHistory(history)
  const middleware = applyMiddleware(thunk, syncedHistory)

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

  if (__DEBUG__) {
    // Required for replaying router actions (ie. redux devtools)
    syncedHistory.listenForReplays(store, state => state.router)
  }

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
