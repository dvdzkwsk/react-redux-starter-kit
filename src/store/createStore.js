import Immutable from 'immutable'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import makeRootReducer from './reducers'
import { persistStore, autoRehydrate } from 'redux-persist-immutable'

export default (initialState = Immutable.Map()) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []

  let composeEnhancers = compose

  if (__DEV__) {
    const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    if (typeof composeWithDevToolsExtension === 'function') {
      composeEnhancers = composeWithDevToolsExtension
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      autoRehydrate(),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  store.history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState (state) {
      return state.get('routing').toJS();
    }
  })

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  persistStore(store)

  return store
}
