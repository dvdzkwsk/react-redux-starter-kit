import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { Field, reduxForm } from 'redux-form'

export const Register = (props) => (
  <Form>
    <InputGroup>
      <InputGroup.Addon><FontAwesome name='address-book' /></InputGroup.Addon>
      <Field component='input' name='email' type='text' placeholder='e-mail' className='form-control' />
    </InputGroup>
    <InputGroup>
      <InputGroup.Addon><FontAwesome name='key' /></InputGroup.Addon>
      <Field component='input' name='password' type='password' placeholder='password' className='form-control' />
    </InputGroup>
    <Button type='button' bsStyle='primary' onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Submit</Button>
    <Button type='button' disabled={props.pristine || props.submitting} onClick={props.reset}>Clear Values</Button>
  </Form>
)

Register.propTypes = {
  handleSubmit : React.PropTypes.func.isRequired,
  submitting   : React.PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'registerForm'
})(Register)
