import React  from 'react';
import './core-layout.scss';

export default class CoreLayout extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div className='page-container'>
        <div className='view-container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
