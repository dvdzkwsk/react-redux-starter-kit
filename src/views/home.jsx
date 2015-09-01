import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  sampleStore : state.sample
}))
export default class HomeView extends React.Component {
  constructor () {
    super();
  }

  _sampleAction () {

    // normally you'd import an action creator, but I don't want to create
    // a file that you're just going to delete anyways!
    this.props.dispatch({ type : 'SAMPLE_ACTION' });
  }

  render () {
    return (
      <div className='view view--home container'>
        <h1 className='text-center'
            onClick={::this._sampleAction}>
            {this.props.sampleStore.message}
        </h1>
      </div>
    );
  }
}
