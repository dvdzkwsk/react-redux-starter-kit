import React, { PropTypes } from 'react';
import SignupForm from '../../components/SignupForm';

export class SignupView extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-12">
            <h1 className='text-center'>Sign up</h1>
          </div>

          <div className="col-sm-12">
            <SignupForm />
          </div>

        </div>
      </div>
    );
  }
}

export default SignupView;
