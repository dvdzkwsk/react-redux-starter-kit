import React from 'react'
import { Form, FormGroup, Col, ControlLabel, InputGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { Field, reduxForm } from 'redux-form'

export const Login = (props) => (
  <Form horizontal>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>Email</Col>
      <Col sm={10}>
        <Field component='input' name='email' type='text' placeholder='e-mail' className='form-control' />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>Password</Col>
      <Col sm={10}>
        <Field component='input' name='password' type='password' placeholder='password' className='form-control' />
      </Col>
    </FormGroup>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <div className='checkbox'>
          <label>
            <Field component='input' id='rememberMe' name='rememberMe' type='checkbox' label='remember me' /> remember me
          </label>
        </div>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type='button' onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Sign in</Button>
      </Col>
    </FormGroup>
  </Form>
)

Login.propTypes = {
  handleSubmit : React.PropTypes.func.isRequired,
  submitting   : React.PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'loginForm'
})(Login)
