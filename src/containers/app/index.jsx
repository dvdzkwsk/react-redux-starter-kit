/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from 'stores';
import routes from 'routes';

// TODO: better way to do conditional requires with webpack?
const { DevTools, LogMonitor, DebugPanel } = (function () {
  return __DEBUG__ ? require('redux-devtools/lib/react') : {};
})();
/* eslint-enable */

export default class ClientApp extends React.Component {
  static propTypes = {
    history      : React.PropTypes.object,
    initialState : React.PropTypes.object
  }

  static defaultProps = {
    initialState : {}
  }

  constructor () {
    super();
  }

  renderDevTools () {
    return (
      <DebugPanel top left bottom key='debugPanel'>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }

  renderRouter () {
    if (__SERVER__) {
      return (
        <Router {...this.props.initialState} />
      );
    } else {
      return (
        <Router history={this.props.history}>
          {routes}
        </Router>
      );
    }
  }

  render () {
    return (
      <div>
        {__DEBUG__ && this.renderDevTools()}
        <Provider store={store}>
          {() => this.renderRouter()}
        </Provider>
      </div>
    );
  }
}
