import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import { createDevToolsWindow } from 'utils';
import { RoutingContext } from 'react-router';

export default class Root extends React.Component {
  static propTypes = {
    store          : React.PropTypes.object.isRequired,
    routerHistory  : React.PropTypes.object,
    routingContext : React.PropTypes.object
  }

  constructor () {
    super();
  }

  renderDevTools () {
    if (__DEBUG_NW__) {
      createDevToolsWindow(this.props.store);
      return null;
    } else {
      return (
        <DebugPanel top left bottom key='debugPanel'>
          <DevTools store={this.props.store} monitor={LogMonitor} />
        </DebugPanel>
      );
    }
  }

  // TODO: invariant error when neither of these are provided
  renderRouter () {
    if (this.props.routingContext) {
      return (
        <RoutingContext {...this.props.routingContext} />
      );
    } else if (this.props.routerHistory) {
      return (
        <Router history={this.props.routerHistory}>
          {routes}
        </Router>
      );
    }
  }

  render () {
    let debugTools = null;

    if (__DEBUG__) {
      debugTools = this.renderDevTools();
    }

    return (
      <div>
        {debugTools}
        <Provider store={this.props.store}>
          {this.renderRouter()}
        </Provider>
      </div>
    );
  }
}
