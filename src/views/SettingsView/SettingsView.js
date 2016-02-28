import React, { PropTypes } from 'react';
import SettingsForm from '../../components/SettingsForm';

export class SettingsView extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">

          <div className="col-sm-12">
            <h1 className='text-center'>Change Password</h1>
          </div>

          <div className="col-sm-12">
            <SettingsForm />
          </div>

        </div>
      </div> 
    );
  }
}

export default SettingsView;


