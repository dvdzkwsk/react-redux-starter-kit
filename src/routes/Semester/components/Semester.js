import React from 'react'
import { Field, reduxForm } from 'redux-form'

const renderField = ({ input, label, type, value, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} value={value} />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

export const Semester = (props) => (
  <form id='semesterForm'>
    <Field component={renderField} name='id' type='number' label='ID' value={props.currentSemester.id} />
    <Field component={renderField} name='name' type='text' label='name' value={props.currentSemester.name} />
    <button type='button' onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Submit</button>
    <button type='button' disabled={props.pristine || props.submitting} onClick={props.reset}>reset</button>
  </form>
)

export default reduxForm({
  form: 'semesterForm'
})(Semester)
