import React from 'react'

export const StatusMessage = (props) => (
  <div className={`alert alert-danger ${props.error ? 'show' : 'hidden'}`}>
    {props.error}
  </div>
)

export default StatusMessage
