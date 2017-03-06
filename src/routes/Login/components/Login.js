import React from 'react'
import { Form, Field, reduxForm } from 'redux-form'
import { FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { loginSucceed, loginFailed } from '../modules/login'

export const Login = (props) => (
  <Form onSubmit={props.handleSubmit(props.login)} form='form'>
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <Field name='email' component='input' type='text' placeholder='Email' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <Field name='password' component='input' type='password' placeholder='Password' className='form-control' />
    </FormGroup>
    <FormGroup>
      <div className='checkbox'>
        <label>
          <Field name='rememberMe' component='input' type='checkbox' id='rememberMe' label='remember me' /> remember me
        </label>
      </div>
    </FormGroup>
    <FormGroup>
      <Button type='submit' onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Sign in</Button>
    </FormGroup>
  </Form>
)

export default reduxForm({
  form: 'loginForm',
  onSubmitSuccess: loginSucceed,
  onSubmitFail: loginFailed
})(Login)
