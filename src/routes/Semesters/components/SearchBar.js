import React from 'react'
import { InputGroup } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { Field, reduxForm } from 'redux-form'

export const SearchBar = (props) => (
  <InputGroup>
    <InputGroup.Addon><FontAwesome name='search' /></InputGroup.Addon>
    <Field onChange={props.searchValueChanged} component='input' name='searchSemesterField' type='text' placeholder='search semesters...' className='form-control' />
  </InputGroup>
)

export default reduxForm({
  form: 'searchBarForm'
})(SearchBar)
