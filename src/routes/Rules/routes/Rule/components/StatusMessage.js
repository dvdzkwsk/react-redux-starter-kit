import React from 'react'
import { Link } from 'react-router'

export const StatusMessage = ({
  status,
  payload,
  error
}) => (
  <div className={`alert  ${error && 'alert-danger'} ${status === 'ok' && 'alert-success'} ${!status && 'hidden'}`}>
    {
      status && (error || <span>'Success!' <Link to={`/rules/${payload.rule}`}>Go to updated rule</Link>.</span>)
    }
  </div>
)

StatusMessage.propTypes = {
  status: React.PropTypes.string,
  payload: React.PropTypes.object,
  error: React.PropTypes.string
}

export default StatusMessage
