import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import Helmet from 'react-helmet'

const Root = (props) => (
  <Provider store={props.store}>
    <div style={{ height: '100%' }}>
      <Helmet {...props.title}/>
      <Router history={props.history} key={Math.random()}>
        {props.routes}
      </Router>
    </div>
  </Provider>
)

Root.propTypes = {
  history: React.PropTypes.object.isRequired,
  routes: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired,
  title: React.PropTypes.shape({
    defaultTitle: React.PropTypes.string.isRequired,
    titleTemplate: React.PropTypes.string.isRequired
  }).isRequired
}

// Use Redux DevTools chrome extension
if (__DEBUG__) {
  if (!window.devToolsExtension) window.devToolsExtension.open()
}

export default Root
