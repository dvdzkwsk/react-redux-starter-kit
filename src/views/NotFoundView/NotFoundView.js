import React from 'react';
import { Link } from 'react-router';

export class NotFoundView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>This is a demo 404 page!</h1>
        <hr />
        <Link to='/'>Back To Home View</Link>
      </div>
    );
  }
}

export default NotFoundView;
