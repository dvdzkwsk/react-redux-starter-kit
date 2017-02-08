import React from 'react'
import { FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

export const Register = (props) => (
  <form>
    <FormGroup>
      <ControlLabel>First name</ControlLabel>
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
    <Button type='button' bsStyle='primary' onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Submit</Button>
    <Button type='button' disabled={props.pristine || props.submitting} onClick={props.reset}>Clear Values</Button>
  </form>
)

Register.propTypes = {
  handleSubmit : React.PropTypes.func.isRequired,
  submitting   : React.PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'registerForm'
})(Register)
