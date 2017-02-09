import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton'
import { mode } from '../../Semesters/modules/semesters'
import { browserHistory } from 'react-router'

let Semester = (props) => {
  const infoMode = props.mode === mode.info
  return (
    <form id='semesterForm'>
      {/* TODO replace type with hidden */}
      <fieldset disabled={infoMode}>
        <Field name='id' component={TextField} type='number' floatingLabelText='ID' disabled={true} />
        <Field name='name' component={TextField} floatingLabelText='Name' />
      </fieldset>
      { !infoMode ? (<FlatButton primary={true} onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>Submit</FlatButton>) : ''}
      <FlatButton onClick={browserHistory.goBack}>cancel</FlatButton>
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
