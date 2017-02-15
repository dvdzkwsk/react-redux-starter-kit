import React from 'react'
import { denormalize } from 'normalizr'
import adDirectorSchema from 'helpers/schema'

export const Review = (props) => (
  <div>
    {props.conditions.map(c => (
      <div>{c.dimension} {c.op ? 'is' : 'is not'} {c.value.join(' or ')}</div>
    ))}
    {props.actions.map(a => (
      <div>{a.type}</div>
    ))}
  </div>
)

export default Review
