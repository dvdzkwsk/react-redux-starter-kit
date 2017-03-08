import React from 'react'
import { Link } from 'react-router'
import './RuleDescription.scss'

export const RuleDescription = ({
  id,
  description,
  deleteRule,
  disabled
}) => (
  <tr className={disabled && 'disabled'}>
    <td>
      {
        disabled
        ? <span>{description} </span>
        : <Link to={`/rules/${id}`}>{description} </Link>
      }
    </td>
    <td className='delete-button'>
      <button
        className='btn btn-default'
        disabled={disabled}
        onClick={e => {
          e.preventDefault()
          deleteRule(id)
        }}
      >
        <div className='glyphicon glyphicon-trash' />
      </button>
    </td>
  </tr>
)

RuleDescription.propTypes = {
  id: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  deleteRule: React.PropTypes.func.isRequired,
  disabled: React.PropTypes.bool.isRequired
}

export default RuleDescription
