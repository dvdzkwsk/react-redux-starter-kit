/* eslint-disable */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from 'stores';
import routes from 'routes';
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
      <Provider store={store}>
        {() => this.renderRouter()}
      </Provider>
    );
  }
}
