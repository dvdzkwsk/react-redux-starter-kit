import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const SearchBar = (props) => (
  <Field component='input' name='searchSemesterField' type='text' placeholder='search semesters...' />
)

export default reduxForm({
  form: 'searchBarForm'
})(SearchBar)
