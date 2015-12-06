import React        from 'react';
import { Provider } from 'react-redux';
import { Router }   from 'react-router';
import routes       from '../routes';

export default class Root extends React.Component {
  static propTypes = {
    history : React.PropTypes.object.isRequired,
    store   : React.PropTypes.object.isRequired
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
