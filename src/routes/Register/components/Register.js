import React from 'react'
import { FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { Field, Form, reduxForm } from 'redux-form'
import { registerSucceed, registerFailed } from '../modules/register'

export const Register = (props) => (
  <Form onSubmit={props.handleSubmit(props.register)} form='form'>
    <FormGroup>
      <ControlLabel>First Name</ControlLabel>
      <Field component='input' name='firstName' type='text' placeholder='first name' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Surname</ControlLabel>
      <Field component='input' name='surname' type='text' placeholder='surname' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Email</ControlLabel>
      <Field component='input' name='email' type='text' placeholder='e-mail' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password</ControlLabel>
      <Field component='input' name='password' type='password' placeholder='password' className='form-control' />
    </FormGroup>
    <FormGroup>
      <ControlLabel>Password repeat</ControlLabel>
      <Field component='input' name='passwordRepeat' type='password' placeholder='password-repeat' className='form-control' />
    </FormGroup>
    <Button type='submit' bsStyle='primary' disabled={props.pristine || props.submitting}>Submit</Button>
    <Button type='button' disabled={props.pristine || props.submitting} onClick={props.reset}>Clear Values</Button>
  </Form>
)

export default reduxForm({
  form: 'registerForm',
  onSubmitSuccess: registerSucceed,
  onSubmitFail: registerFailed
})(Register)
