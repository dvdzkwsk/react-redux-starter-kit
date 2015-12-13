import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

const PropTypes = {
  history: React.PropTypes.object.isRequired,
  routes: React.PropTypes.array.isRequired,
  store: React.PropTypes.object.isRequired
}

const RootContent = ({ history, routes }) => {
  return (
    <Router history={history}>
      {routes}
    </Router>
  )
}

const Root = ({ history, routes, store }) => {
  if (__DEBUG__ && !__DEBUG_NW__) {
    const DevTools = require('./DevTools').default
    return (
      <Provider store={store}>
        <div>
          <RootContent history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    )
  }

  return (
    <Provider store={store}>
      <RootContent history={history} routes={routes} />
    </Provider>
  )
}

Root.propTypes = PropTypes

export default Root
