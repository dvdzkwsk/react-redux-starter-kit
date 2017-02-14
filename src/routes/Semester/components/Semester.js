import React from 'react'
import { connect } from 'react-redux'
import { Form, Field, reduxForm } from 'redux-form'
import { FormGroup, ControlLabel, Button } from 'react-bootstrap'
import { mode } from '../../Semesters/modules/semestersMainView'
import { browserHistory } from 'react-router'
import { updateSucceed, updateFailed } from '../modules/semester'

let Semester = (props) => {
  const isInfoMode = props.mode === mode.properties[mode.info].uriName
  return (
    <Form onSubmit={props.handleSubmit(props.updateSemester)} form='form'>
      <fieldset disabled={isInfoMode}>
        <Field name='id' component='input' type='hidden' placeholder='ID' className='form-control' />
        <FormGroup>
          <ControlLabel>Name</ControlLabel>
          <Field name='name' component='input' type='text' placeholder='Name' className='form-control' />
        </FormGroup>
        <FormGroup>
          <ControlLabel>School</ControlLabel>
          <Field name='school' component='input' type='text' placeholder='School' className='form-control' />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Start</ControlLabel>
          <Field name='start' component='input' type='date' placeholder='Start' className='form-control' />
        </FormGroup>
        <FormGroup>
          <ControlLabel>End</ControlLabel>
          <Field name='end' component='input' type='date' placeholder='End' className='form-control' />
        </FormGroup>
      </fieldset>
      { !isInfoMode ? (<Button type='submit' bsStyle='primary' onClick={props.handleSubmit} disabled={props.pristine || props.submitting}>{props.mode}</Button>) : ''}
      <Button onClick={browserHistory.goBack}>cancel</Button>
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
