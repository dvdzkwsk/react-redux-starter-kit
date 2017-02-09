import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

export const SearchBar = (props) => (
  <Field name='searchSemesterField' onChange={props.searchValueChanged} component={TextField} hintText={<span><FontAwesome name='search' /> search semesters...</span>} />
)

export default reduxForm({
  form: 'searchBarForm'
})(SearchBar)
