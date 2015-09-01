import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import configureStore from 'stores';
import routes from 'routes';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import createDevToolsWindow from 'utils';

const store = configureStore();

export default class ClientApp extends React.Component {
  static propTypes = {
    history      : React.PropTypes.object,
    initialState : React.PropTypes.object
  }

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
