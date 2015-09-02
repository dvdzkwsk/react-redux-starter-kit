import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from 'stores';
import routes from 'routes';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import createDevToolsWindow from 'utils';

const store = configureStore();

export default class Root extends React.Component {
  constructor () {
    super();
  }

  renderDevTools () {
    if (__DEBUG_NW__) {
      createDevToolsWindow(store);
      return null;
    } else {
      return (
        <DebugPanel top left bottom key='debugPanel'>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
      );
    }
  }

  renderRouter () {
    const routerState = this.props.initialState || this.props;

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
        <Provider store={store}>
          {this.renderRouter()}
        </Provider>
      </div>
    );
  }
}
