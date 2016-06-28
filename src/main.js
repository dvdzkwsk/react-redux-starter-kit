import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/createStore'
import { AppContainer } from 'react-hot-loader'

// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

// ========================================================
// Developer Tools Setup
// ========================================================
if (__DEBUG__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

// TODO(zuko): get rid of routerKey
// TODO(zuko): hot reloading does actually work, the whole app reloads
const render = (routerKey = null) => {
  const nextRoutes = require('./routes/index').default(store)
  const NextRootContainer = require('./containers/RootContainer').default

  ReactDOM.render(
    <AppContainer>
      <NextRootContainer
        store={store}
        history={history}
        routes={nextRoutes}
        routerKey={routerKey}
      />
    </AppContainer>,
    MOUNT_NODE
  )
}

if (__DEV__ && module.hot) {
  module.hot.accept([
    './containers/RootContainer',
    './routes/index'
  ], () => render(Date.now()))
}

// ========================================================
// Go!
// ========================================================
render()
