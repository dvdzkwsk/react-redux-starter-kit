import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export class Navigation extends React.Component {

  render () {
    return (
      <ul className="navigation">
        <li className={this.props.path == '/dashboard' ? 'active' : ''}>
          <Link to='/dashboard'>Active Requests</Link>
        </li>
        <li className={this.props.path == '/dashboard/history' ? 'active' : ''}>
          <Link to='/dashboard/history'>Inactive Requests</Link>
        </li>
      </ul>
    )
  }
}

export default Navigation
