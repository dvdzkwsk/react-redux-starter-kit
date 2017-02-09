import React from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton';
import { registerSucceed, registerFailed } from '../modules/register'

export const Register = (props) => (
  <Form onSubmit={props.handleSubmit(props.register)} form='form'>
    <Field name='firstName' component={TextField} floatingLabelText='first name' />
    <Field name='surname' component={TextField} floatingLabelText='surname' />
    <Field name='email' component={TextField} floatingLabelText='e-mail' />
    <Field name='password' component={TextField} type='password' floatingLabelText='password' />
    <Field name='passwordRepeat' component={TextField} type='password' floatingLabelText='password-repeat' />
    <FlatButton type='submit' disabled={props.pristine || props.submitting}>Submit</FlatButton>
    <FlatButton disabled={props.pristine || props.submitting} onClick={props.reset}>Clear Values</FlatButton>
  </Form>
)

export default reduxForm({
  form: 'registerForm',
  onSubmitSuccess: registerSucceed,
  onSubmitFail: registerFailed
})(Register)
