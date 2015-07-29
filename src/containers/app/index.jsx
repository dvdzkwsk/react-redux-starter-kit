import React from 'react';
import { provide } from 'react-redux';
import { Router } from 'react-router';
import store from 'stores';
import routes from 'routes';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
import { Route }   from 'react-router';
import CoreLayout  from 'layouts/core';
import HomeView    from 'views/home';

console.log(routes);

@provide(store)
export default class ClientApp extends React.Component {
  static propTypes = {
    history : React.PropTypes.object.isRequired
  }

  constructor () {
    super();
  }

  renderDevTools () {
    if (__DEV__) {
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
        <h1>APP!!</h1>
        {this.renderDevTools()}
        <Router history={this.props.history}>
          <Route component={CoreLayout}>
            <Route name='home' path='/' component={HomeView} />
          </Route>
        </Router>
      </div>
    );
  }
}
