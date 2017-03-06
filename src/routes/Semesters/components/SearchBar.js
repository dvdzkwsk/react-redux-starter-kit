import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputGroup } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export const SearchBar = (props) => (
  <InputGroup>
    <InputGroup.Addon><FontAwesome name='search' /></InputGroup.Addon>
    <Field name='searchSemesterField' onChange={props.searchValueChanged} type='text' component='input' placeholder='search semesters...' className='form-control' />
  </InputGroup>
)

export default reduxForm({
  form: 'searchBarForm'
})(SearchBar)
