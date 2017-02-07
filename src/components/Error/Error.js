import React from 'react'
import { Alert } from 'react-bootstrap'

import './Error.scss'

export const Error = (props) => (
  <div id='alerts-queue'>
    {props.errors.map((error, index) => (
      <Alert key={index} bsStyle='danger' onDismiss={() => props.removeErrorByIndex(index)}>
        <p>{error.message}</p>
      </Alert>
    ))}
  </div>
)

export default Error
