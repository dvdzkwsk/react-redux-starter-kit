import React from 'react'
import { Link } from 'react-router'

export const RuleDescription = (props) => (
  <li>
    <Link to={`rule/${props.id}`}>{props.description}</Link>
  </li>
)

RuleDescription.propTypes = {
  id: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default RuleDescription
