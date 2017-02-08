import React from 'react'
import { FormGroup, Form, Col, ControlLabel, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

export const Register = (props) => (
  <Form horizontal>
    <Col sm={6}>
      <FormGroup>
        <ControlLabel>First Name</ControlLabel>
        <Field component='input' name='firstName' type='text' placeholder='first name' className='form-control' />
      </FormGroup>
    </Col>
    <Col sm={6}>
      <FormGroup>
        <ControlLabel>Surname</ControlLabel>
        <Field component='input' name='surname' type='text' placeholder='surname' className='form-control' />
      </FormGroup>
    </Col>
    <Col sm={12}>
      <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <Field component='input' name='email' type='text' placeholder='e-mail' className='form-control' />
      </FormGroup>
    </Col>
    <Col sm={6}>
      <FormGroup>
        <ControlLabel>Password</ControlLabel>
        <Field component='input' name='password' type='password' placeholder='password' className='form-control' />
      </FormGroup>
    </Col>
    <Col sm={6}>
      <FormGroup>
        <ControlLabel>Password repeat</ControlLabel>
        <Field component='input' name='passwordRepeat' type='password' placeholder='password-repeat' className='form-control' />
      </FormGroup>
    </Col>
    <Col sm={12}>
      <Button type='button' bsStyle='primary' onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Submit</Button>
      <Button type='button' disabled={props.pristine || props.submitting} onClick={props.reset}>Clear Values</Button>
    </Col>
  </Form>
)

Register.propTypes = {
  handleSubmit : React.PropTypes.func.isRequired,
  submitting   : React.PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'registerForm'
})(Register)
