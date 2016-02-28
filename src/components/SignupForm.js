import React, { PropTypes } from 'react';

export default class SignupForm extends React.Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
    this.onConfirmPasswordInputChange = this.onConfirmPasswordInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onNameInputChange (event) {
    this.setState({
      name: event.target.value
    });
  }

  onEmailInputChange (event) {
    this.setState({
      email: event.target.value
    });
  }

  onPasswordInputChange (event) {
    this.setState({
      password: event.target.value
    });
  }

  onConfirmPasswordInputChange (event) {
    this.setState({
      confirmPassword: event.target.value
    });
  }

  onFormSubmit (event) {
    event.preventDefault();

    const { name,
            email,
            password,
            confirmPassword } = this.state;

    this.props.onFormSubmit({
      name,
      email,
      password,
      confirmPassword
    });

    this.setState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  }

  get error () {
    return (
      <div className='form-group has-error'>
        <p className='help-block'>
          Error
        </p>
      </div>
    );
  }

  render () {
    return (
      <form
        onSubmit={this.onFormSubmit}>

       <div className='form-group'>
          <label>Name</label>
          <input
            type="text"
            onChange={this.onNameInputChange}
            value={this.state.name}
            className='form-control' />
       </div>

       <div className='form-group'>
          <label>Email</label>
          <input
            type="email"
            onChange={this.onEmailInputChange}
            value={this.state.email}
            className='form-control' />
        </div>

        <div className='form-group'>
          <label>Password</label>

          <input
            type="password"
            onChange={this.onPasswordInputChange}
            value={this.state.password}
            className="form-control" />
        </div>

        <div className='form-group'>
          <label>Confirm Password</label>

          <input
            type="password"
            onChange={this.onConfirmPasswordInputChange}
            value={this.state.confirmPassword}
            className="form-control" />
        </div>

        {this.error}

        <input
          type='submit'
          value='Signup'
          className='btn btn-inverse btn-lg btn-login' />

      </form>
   );
  }
}
