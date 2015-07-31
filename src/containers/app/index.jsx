/* eslint-disable */
import React from 'react';
import { provide } from 'react-redux';
import { Router } from 'react-router';
import store from 'stores';
import routes from 'routes';
import { DevTools, LogMonitor, DebugPanel } from 'redux-devtools/lib/react';
/* eslint-enable */

@provide(store)
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

  // renderDevTools () {
  //   if (__DEV__ && false) {
  //     return (
  //       <DebugPanel top left bottom key='debugPanel'>
  //         <DevTools store={store} monitor={LogMonitor} />
  //       </DebugPanel>
  //     );
  //   }
  // }

  renderRouter () {
    var router;

    if (__SERVER__) {
      router = (
        <Router {...this.props.initialState} />
      );
    } else {
      router = (
        <Router history={this.props.history}>
          {routes}
        </Router>
      );
    }

    return router;
  }

  render () {
    return (
      <div>
        {this.renderRouter()}
      </div>
    );
  }
}
