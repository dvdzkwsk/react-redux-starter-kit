import React from 'react'
import { browserHistory } from 'react-router'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

export const NotFound = () => (
  <div>
    <h4>Page not found!</h4>
    <p><a href='#' onClick={goBack}>&larr; Back</a></p>
  </div>
)

export default NotFound
