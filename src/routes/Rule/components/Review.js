import React from 'react'
import { denormalize } from 'normalizr'
import adDirectorSchema from 'helpers/schema'
import './Review.scss'

export const Review = ({
  conditions,
  actions
}) => (
  <div>
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>If</h3>
      </div>
      <ul className='list-group'>
        {
          conditions.map(({dimension, op, value}) => {
            const isInvalid = !value || !value.length
            const operator = isInvalid || op ? 'is' : 'is not'

            return (
              <li className={`list-group-item ${isInvalid && 'list-group-item-danger'}`}>
                {dimension.split('.').join(' ')} {operator} {value.join(' or ') || 'undefined'}
              </li>
            )
          })
        }
      </ul>
    </div>
    <div className='panel panel-default'>
      <div className='panel-heading'>
        <h3 className='panel-title'>Then</h3>
      </div>
      <ul className='list-group'>
        {actions.map(a => (
          <li className='list-group-item'>
            <p>set {a.type} to </p>
            <table className='table table-bordered'>
              <tbody>
                {
                  Object.keys(a.value).length ?
                  Object.keys(a.value).sort().map(key => (
                    <tr>
                      <td className='action-key'>{key}: </td>
                      <td className='action-value'>
                        {
                          Array.isArray(a.value[key]) ?
                          a.value[key].join(', ') :
                          a.value[key]
                        }
                      </td>
                    </tr>
                  )) :
                  <tr className='danger'>
                    <td className='text-danger'>undefined</td>
                  </tr>
                }
              </tbody>
            </table>
            <p> with rank {a.rank} and yield {a.yield}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default Review
