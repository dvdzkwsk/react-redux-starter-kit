import React           from 'react';
import { Provider }    from 'react-redux';
import routes          from '../routes';
import { ReduxRouter } from 'redux-router';
import DevTools        from './DevTools';

export default class Root extends React.Component {
  static propTypes = {
    store : React.PropTypes.object.isRequired,
    debug : React.PropTypes.bool
  }

  render () {
    return (
      <div>
        <Provider store={this.props.store}>
          <div>
            <ReduxRouter>
              {routes}
            </ReduxRouter>
            {this.props.debug && <DevTools />}
          </div>
        </Provider>
      </div>
    );
  }
}
