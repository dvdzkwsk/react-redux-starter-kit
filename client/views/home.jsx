import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  counter : state.counter
}))
export default class HomeView extends React.Component {
  static propTypes = {
    dispatch : React.PropTypes.func.isRequired,
    counter  : React.PropTypes.number.isRequired
  }

  constructor () {
    super();
  }

  // normally you'd import an action creator, but I don't want to create
  // a file that you're just going to delete anyways!
  _increment () {
    this.props.dispatch({ type : 'COUNTER_INCREMENT' });
  }

  render () {
    return (
      <div className='container text-center'>
        <h1>Welcome to the React Redux Starter Kit</h1>
        <h2>Sample Counter: {this.props.counter}</h2>
        <button className='btn btn-default'
                onClick={::this._increment}>
          Increment
        </button>
      </div>
    );
  }
}
