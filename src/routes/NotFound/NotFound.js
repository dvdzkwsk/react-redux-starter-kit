import React from 'react'
import { browserHistory } from 'react-router'
import Helmet from 'react-helmet'

const goBack = (e) => {
  e.preventDefault()
  return browserHistory.goBack()
}

const NotFound = () => (
  <div>
    <Helmet title='Not Found'/>
    <h3 className='text-muted'>Page Not Found!</h3>
    <a href='#' onClick={goBack}>Go Back</a>
  </div>
)

export default NotFound
