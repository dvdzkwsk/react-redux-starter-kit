import React from 'react'

export const StatusMessage = ({
  status,
  error
}) => (
  <div className={`alert alert-danger ${error ? 'show' : 'hidden'}`}>
    {error}
  </div>
)

export default StatusMessage
