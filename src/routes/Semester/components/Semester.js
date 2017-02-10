import React from 'react'
import { connect } from 'react-redux'
import { Form, Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import FlatButton from 'material-ui/FlatButton'
import { mode } from '../../Semesters/modules/semestersMainView'
import { browserHistory } from 'react-router'
import { updateSucceed, updateFailed } from '../modules/semester'

let Semester = (props) => {
  const isInfoMode = props.mode === mode.properties[mode.info].uriName
  return (
    <Form onSubmit={props.handleSubmit(props.updateSemester)} form='form'>
      {/* TODO replace type with hidden */}
      <fieldset disabled={isInfoMode}>
        <Field name='id' component={TextField} type='number' floatingLabelText='ID' disabled />
        <Field name='name' component={TextField} floatingLabelText='Name' />
      </fieldset>
      { !isInfoMode ? (<FlatButton type='submit' primary onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>{props.mode}</FlatButton>) : ''}
      <FlatButton onClick={browserHistory.goBack}>cancel</FlatButton>
    </Form>
  )
}

Semester = reduxForm({
  form: 'semesterForm',
  onSubmitSuccess: updateSucceed,
  onSubmitFail: updateFailed
})(Semester)

export default connect(
  state => ({
    initialValues: state.semestersView.main.selectedSemester
  })
)(Semester)
