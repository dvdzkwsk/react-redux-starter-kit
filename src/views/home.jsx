import React from 'react';
import { connect } from 'react-redux';

@connect(state => ({
  sampleStore : state.sample
}))
export default class HomeView extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className='view view--home container'>
        <h1 className='text-center'>{this.props.sampleStore.message}</h1>
      </div>
    );
  }
}
