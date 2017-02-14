import React from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import { FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { registerSucceed, registerFailed } from '../modules/register'

export const Register = (props) => (
  <Form onSubmit={props.handleSubmit(props.register)} form='form'>
    <FormGroup>
      <ControlLabel>First name</ControlLabel>
      <Field name='firstName' component='input' type='text' placeholder='First name' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Surname</ControlLabel>
      <Field name='surname' component='input' type='text' placeholder='Surname' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <Field name='email' component='input' type='text' placeholder='Email' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <Field name='password' component='input' type='password' placeholder='Password' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password repeat</ControlLabel>
      <Field name='passwordRepeat' component='input' type='password' placeholder='Password' className='form-control' />
    </FormGroup>
    <Button type='submit' disabled={props.pristine || props.submitting}>Sign up</Button>
    <Button disabled={props.pristine || props.submitting} onClick={props.reset}>Clear values</Button>
  </Form>
)

export default reduxForm({
  form: 'registerForm',
  onSubmitSuccess: registerSucceed,
  onSubmitFail: registerFailed
})(Register)
