import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from 'routes';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import createDevToolsWindow from 'utils';

export default class Root extends React.Component {
  static propTypes = {
    routerHistory      : React.PropTypes.object,
    initialRouterState : React.PropTypes.object,
    store : React.PropTypes.object
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

  renderRouter () {
    const routerState = this.props.initialRouterState ?
      this.props.initialRouterState :
      { history : this.props.routerHistory };

    return (
      <Router {...routerState}>
        {routes}
      </Router>
    );
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
