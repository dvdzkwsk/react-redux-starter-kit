import React from 'react';
import { provide } from 'react-redux';
import { Router } from 'react-router';
import store from 'stores';
import routes from 'routes';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';

@provide(store)
export default class ClientApp extends React.Component {
  static propTypes = {
    history : React.PropTypes.object.isRequired
  }

  constructor () {
    super();
  }

  // TODO: create a __DEBUG__ flag that this can use
  renderDevTools () {
    if (__DEV__ && false) {
      return (
        <DebugPanel top left bottom key='debugPanel'>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      );
    }
  }

  render () {
    return (
      <div>
        {this.renderDevTools()}
        <Router history={this.props.history}>
          {routes}
        </Router>
      </div>
    );
  }
}
