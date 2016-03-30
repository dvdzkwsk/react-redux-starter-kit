import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import Root from './routes/Root'
import createStore from './store/createStore'

const MOUNT_ELEMENT = document.getElementById('root')
const DEFAULT_TITLE = 'React Redux Starter Kit'

// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the key "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const store = createStore(window.__INITIAL_STATE__, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})

// Default titles and nested template (react-helmet)
const title = {
  defaultTitle: DEFAULT_TITLE,
  titleTemplate: `%s - ${DEFAULT_TITLE}`
}

let render = () => {
  // This syntax will be updated in the near future to use System loader
  const createRoutes = require('./routes/index').default
  const routes = createRoutes(store)
  const props = { history, routes, store, title }

  ReactDOM.render(<Root {...props}/>, MOUNT_ELEMENT)
}

// If supported, set up hot reloading and overlay for runtime errors
if (module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')

    ReactDOM.render(<RedBox error={error} />, MOUNT_ELEMENT)
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept(['./routes/index'], () => render())
}

render()
