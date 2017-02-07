import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

let Semester = (props) => (
  <form id='semesterForm'>
    <Field component='input' name='id' type='number' placeholder='ID' className='form-control' />
    <Field component='input' name='name' type='text' placeholder='name' className='form-control' />
    <button type='button' onClick={props.handleSubmit} disabled={props.pristine || props.submitting} className='btn btn-primary'>Submit</button>
    <button type='button' disabled={props.pristine || props.submitting} onClick={props.reset} className='btn btn-default'>reset</button>
  </form>
)

Semester = reduxForm({
  form: 'semesterForm'
})(Semester)

export default connect(
  state => ({
    initialValues: state.semesters.selectedSemester
  })
)(Semester)
