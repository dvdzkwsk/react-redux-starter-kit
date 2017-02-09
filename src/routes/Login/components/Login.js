import React from 'react'
import { FormGroup, Button } from 'react-bootstrap'
import { Form, Field, reduxForm } from 'redux-form'
import { loginSucceed, loginFailed } from '../modules/login'

export const Login = (props) => (
  <Form onSubmit={props.handleSubmit(props.login)} form='form'>
    <FormGroup>
      <Field component='input' name='email' type='text' placeholder='e-mail' className='form-control' />
    </FormGroup>
    <FormGroup>
      <Field component='input' name='password' type='password' placeholder='password' className='form-control' />
    </FormGroup>
    <FormGroup>
      <div className='checkbox'>
        <label>
          <Field component='input' id='rememberMe' name='rememberMe' type='checkbox' label='remember me' /> remember me
        </label>
      </div>
    </FormGroup>
    <FormGroup>
      <Button type='button' onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Sign in</Button>
    </FormGroup>
  </Form>
)

export default reduxForm({
  form: 'loginForm',
  onSubmitSuccess: loginSucceed,
  onSubmitFail: loginFailed
})(Login)
