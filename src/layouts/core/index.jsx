import React            from 'react';
import { RouteHandler } from 'react-router';
import './core-layout.scss';

export default class CoreLayout extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className='page-container'>
        <RouteHandler />
      </div>
    );
  }
}
