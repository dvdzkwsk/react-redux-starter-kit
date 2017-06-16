import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import { syncHistoryWithStore } from 'react-router-redux'

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const history = syncHistoryWithStore(browserHistory, this.props.store)
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={history} children={this.props.routes} />
        </div>
      </Provider>
    )
  }
}

export default App
