import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/LoginForm';
import { login } from '../../redux/modules/auth';

export class LoginView extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit ({ email, password }) {
    this.props.login({ email, password });
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>

            <h1 className='text-center'>Login</h1>

            <p className='text-center'>Accounts are reset on server restart from <code>server/lib/seed.js</code>. Default account is <code>test@example.com</code> / <code>test</code></p>
            <p className='text-center'>Admin account is <code>admin@example.com</code> / <code>admin</code></p>
          </div>

          <div className='col-sm-12'>

            <LoginForm
              isSubmitPending={true}
              onFormSubmit={this.handleFormSubmit} />

          </div>

        </div>
      </div>
    );
  }
}

export default connect(null, {
  login
})(LoginView);
