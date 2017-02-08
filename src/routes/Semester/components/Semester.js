import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { mode } from '../../Semesters/modules/semesters'
import { browserHistory } from 'react-router'

let Semester = (props) => {
  const infoMode = props.mode === mode.info
  return (
    <form id='semesterForm'>
      {/* TODO replace type with hidden */}
      <fieldset disabled={infoMode}>
        <Field component='input' name='id' type='number' placeholder='ID' className='form-control' disabled='true' />
        <Field component='input' name='name' type='text' placeholder='name' className='form-control' />
      </fieldset>
      { !infoMode ? (<button type='button' onClick={props.handleSubmit} disabled={props.pristine || props.submitting} className='btn btn-primary'>Submit</button>) : ''}
      <button type='button' onClick={browserHistory.goBack} className='btn btn-default'>cancel</button>
    </form>
  )
}

Semester = reduxForm({
  form: 'semesterForm'
})(Semester)

export default connect(
  state => ({
    initialValues: state.semesters.selectedSemester
  })
)(Semester)
