import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export const Login = (props) => (
  <form id="loginForm">
    <Field component={renderField} name="email" type="text" label="e-mail"/>
    <Field component={renderField} name="password" type="password" label="password"/>
    <button type="button" onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Submit</button>
    <button type="button" disabled={props.pristine || props.submitting} onClick={props.reset}>Clear Values</button>
  </form>
)

Login.propTypes = {
  handleSubmit : React.PropTypes.func.isRequired,
  submitting   : React.PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'loginForm'
})(Login)
