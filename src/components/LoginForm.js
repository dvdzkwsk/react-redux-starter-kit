import React, { PropTypes } from 'react';

export default class LoginForm extends React.Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    isSubmitPending: PropTypes.bool.isRequired
  };

  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ''
    };

    this.onEmailInputChange = this.onEmailInputChange.bind(this);
    this.onPasswordInputChange = this.onPasswordInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
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

  onFormSubmit (event) {
    event.preventDefault();

    const { email, password } = this.state;

    if (!email || !password)
      return this.setState({
        error: 'Please enter your email and password'
      });

    this.props.onFormSubmit({
      email,
      password
    });

    this.setState({
      email: '',
      password: '',
      error: ''
    });
  }

  get error () {
    return (
      <div className='form-group has-error'>
        <p className='help-block'>
          {this.state.error}
        </p>
      </div>
    );
  }

  get pending () {
    return (
      <div className='form-group'>
        <p>Please wait, logging in...</p>
      </div>
    );
  }

  render () {
    return (
       <form
        onSubmit={this.onFormSubmit}>

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

          {this.state.error && this.error}

          <div className='form-group'>
            <input
              type='submit'
              value='Login'
              className='btn btn-inverse btn-lg btn-login' />
          </div>

          {this.props.isSubmitPending && this.pending}

       </form>
    );
  }
}

