import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const SearchBar = (props) => (
  <Field component='input' name='searchSemesterField' type='text' placeholder='search semesters...' className='form-control' />
)

export default reduxForm({
  form: 'searchBarForm'
})(SearchBar)
