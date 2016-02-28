import React, { PropTypes } from 'react';

export default class SettingsForm extends React.Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.state = {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    };

    this.onOldPasswordInputChange = this.onOldPasswordInputChange.bind(this);
    this.onNewPasswordInputChange = this.onNewPasswordInputChange.bind(this);
    this.onConfirmNewPasswordInputChange = this.onConfirmNewPasswordInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onOldPasswordInputChange (event) {
    this.setState({
      oldPassword: event.target.value
    });
  }

  onNewPasswordInputChange (event) {
    this.setState({
      newPassword: event.target.value
    });
  }

  onConfirmNewPasswordInputChange (event) {
    this.setState({
      confirmNewPassword: event.target.value
    });
  }
  
  onFormSubmit (event) {
    event.preventDefault();

    const { oldPassword, 
            newPassword,
            confirmNewPassword } = this.state;

    this.props.onFormSubmit({
      oldPassword,
      newPassword,
      confirmNewPassword
    });

    this.setState({
      oldPassword: '',
      newPassword: '',
      confirmNewPassword
    });
  }

  get error () {
    return (
      <div className="form-group has-error">
        <p className="help-block">
          Error
        </p>
      </div>
    );
  }

  render () {
    return (
      <form
        onSubmit={this.onFormSubmit}>

       <div className="form-group">
          <label>Old Password</label>
          <input 
            type="password" 
            onChange={this.onOldPasswordInputChange}
            value={this.state.oldPassword}
            className="form-control" />
        </div>

        <div className="form-group">
          <label>New Password</label>

          <input 
            type="password" 
            onChange={this.onNewPasswordInputChange}
            value={this.state.newPassword}
            className="form-control"  />
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>

          <input 
            type="password" 
            onChange={this.onConfirmNewPasswordInputChange}
            value={this.state.confirmNewPassword}
            className="form-control"  />
        </div>

        {this.error}

        <input 
          type='submit'
          value='Save Changes'
          className="btn btn-inverse btn-lg btn-login" />

      </form>
   );
  }
}
