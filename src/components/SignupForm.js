import React, { PropTypes } from 'react';

export default class LoginForm extends React.Component {
  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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

    this.props.onFormSubmit({
      email,
      password
    });

    this.setState({
      email: '',
      password: ''
    });
  }

  render () {
    return (
      <form
        classEmail='thing-form'
        onSubmit={this.onFormSubmit}>

        <label>Syncs in realtime across clients</label>

        <p
          classEmail='input-group'>

          <input
            type='text'
            classEmail='form-control'
            placeholder='Add a new thing here.'
            email='email'
            value={this.state.email}
            onChange={this.onEmailInputChange} />

          <span
            classEmail='input-group-btn'>
            <input
              type='submit'
              classEmail='btn btn-primary'
              disabled={!this.state.email}
              value='Add New' />
          </span>

        </p>

      </form>
   );
  }
}

<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <h1>Login</h1>
      <p>Accounts are reset on server restart from <code>server/config/seed.js</code>. Default account is <code>test@example.com</code> / <code>test</code></p>
      <p>Admin account is <code>admin@example.com</code> / <code>admin</code></p>
    </div>
    <div class="col-sm-12">
      <form class="form" name="form" ng-submit="vm.login(form)" novalidate>

        <div class="form-group">
          <label>Email</label>

          <input type="email" name="email" class="form-control" ng-model="vm.user.email" required>
        </div>

        <div class="form-group">
          <label>Password</label>

          <input type="password" name="password" class="form-control" ng-model="vm.user.password" required>
        </div>

        <div class="form-group has-error">
          <p class="help-block" ng-show="form.email.$error.required && form.password.$error.required && vm.submitted">
             Please enter your email and password.
          </p>
          <p class="help-block" ng-show="form.email.$error.email && vm.submitted">
             Please enter a valid email.
          </p>

          <p class="help-block">{{ vm.errors.other }}</p>
        </div>

        <div>
          <button class="btn btn-inverse btn-lg btn-login" type="submit">
            Login
          </button>
          <a class="btn btn-default btn-lg btn-register" ui-sref="signup">
            Register
          </a>
        </div>

        <hr/>
        <div class="row">
          <div class="col-sm-4 col-md-3">
            <oauth-buttons classes="btn-block"></oauth-buttons>
          </div>
        </div>
      </form>
    </div>
  </div>
  <hr>
</div>


<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <h1>Sign up</h1>
    </div>
    <div class="col-sm-12">
      <form class="form" name="form" ng-submit="vm.register(form)" novalidate>

        <div class="form-group" ng-class="{ 'has-success': form.name.$valid && vm.submitted,
                                            'has-error': form.name.$invalid && vm.submitted }">
          <label>Name</label>

          <input type="text" name="name" class="form-control" ng-model="vm.user.name"
                 required/>
          <p class="help-block" ng-show="form.name.$error.required && vm.submitted">
            A name is required
          </p>
        </div>

        <div class="form-group" ng-class="{ 'has-success': form.email.$valid && vm.submitted,
                                            'has-error': form.email.$invalid && vm.submitted }">
          <label>Email</label>

          <input type="email" name="email" class="form-control" ng-model="vm.user.email"
                 required
                 mongoose-error/>
          <p class="help-block" ng-show="form.email.$error.email && vm.submitted">
            Doesn't look like a valid email.
          </p>
          <p class="help-block" ng-show="form.email.$error.required && vm.submitted">
            What's your email address?
          </p>
          <p class="help-block" ng-show="form.email.$error.mongoose">
            {{ vm.errors.email }}
          </p>
        </div>

        <div class="form-group" ng-class="{ 'has-success': form.password.$valid && vm.submitted,
                                            'has-error': form.password.$invalid && vm.submitted }">
          <label>Password</label>

          <input type="password" name="password" class="form-control" ng-model="vm.user.password"
                 ng-minlength="3"
                 required
                 mongoose-error/>
          <p class="help-block"
             ng-show="(form.password.$error.minlength || form.password.$error.required) && vm.submitted">
            Password must be at least 3 characters.
          </p>
          <p class="help-block" ng-show="form.password.$error.mongoose">
            {{ vm.errors.password }}
          </p>
        </div>

        <div class="form-group" ng-class="{ 'has-success': form.confirmPassword.$valid && vm.submitted,
                                            'has-error': form.confirmPassword.$invalid && vm.submitted }">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" class="form-control" ng-model="vm.user.confirmPassword"
                 match="vm.user.password"
                 ng-minlength="3" required/>
          <p class="help-block"
             ng-show="form.confirmPassword.$error.match && vm.submitted">
            Passwords must match.
          </p>
        </div>

        <div>
          <button class="btn btn-inverse btn-lg btn-register" type="submit">
            Sign up
          </button>
          <a class="btn btn-default btn-lg btn-login" ui-sref="login">
            Login
          </a>
        </div>

        <hr/>
        <div class="row">
          <div class="col-sm-4 col-md-3">
            <oauth-buttons classes="btn-block"></oauth-buttons>
          </div>
        </div>
      </form>
    </div>
  </div>
  <hr>
</div>



<div class="container">
  <div class="row">
    <div class="col-sm-12">
      <h1>Change Password</h1>
    </div>
    <div class="col-sm-12">
      <form class="form" name="form" ng-submit="vm.changePassword(form)" novalidate>

        <div class="form-group">
          <label>Current Password</label>

          <input type="password" name="password" class="form-control" ng-model="vm.user.oldPassword"
                 mongoose-error/>
          <p class="help-block" ng-show="form.password.$error.mongoose">
              {{ vm.errors.other }}
          </p>
        </div>

        <div class="form-group">
          <label>New Password</label>

          <input type="password" name="newPassword" class="form-control" ng-model="vm.user.newPassword"
                 ng-minlength="3"
                 required/>
          <p class="help-block"
             ng-show="(form.newPassword.$error.minlength || form.newPassword.$error.required) && (form.newPassword.$dirty || vm.submitted)">
            Password must be at least 3 characters.
          </p>
        </div>

        <div class="form-group">
          <label>Confirm New Password</label>

          <input type="password" name="confirmPassword" class="form-control" ng-model="vm.user.confirmPassword"
                 match="vm.user.newPassword"
                 ng-minlength="3"
                 required=""/>
          <p class="help-block"
             ng-show="form.confirmPassword.$error.match && vm.submitted">
            Passwords must match.
          </p>

        </div>

        <p class="help-block"> {{ vm.message }} </p>

        <button class="btn btn-lg btn-primary" type="submit">Save changes</button>
      </form>
    </div>
  </div>
</div>
