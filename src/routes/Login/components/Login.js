import React from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import { TextField, Checkbox } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton';
import { loginSucceed, loginFailed } from '../modules/login'

export const Login = (props) => (
  <Form onSubmit={props.handleSubmit(props.login)} form='form'>
    <Field name='email' component={TextField} floatingLabelText='Email' />
    <Field name='password' component={TextField} floatingLabelText='Password' type='password' />
    <Field name='rememberMe' component={Checkbox} label='remember me' />
    <FlatButton onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Sign in</FlatButton>
  </Form>
)

export default reduxForm({
  form: 'loginForm',
  onSubmitSuccess: loginSucceed,
  onSubmitFail: loginFailed
})(Login)
