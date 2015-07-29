import React  from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from 'actions/todo';
import store from 'stores';
import './core-layout.scss';

export default class CoreLayout extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className='page-container'>
        {this.props.children}
      </div>
    );
  }
}
