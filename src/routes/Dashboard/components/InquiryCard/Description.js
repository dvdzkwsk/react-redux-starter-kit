import React from 'react'
import Moment from 'moment'

export const Description = (props) => (
  <div className='description'>
    <span>{props.inquiry.get('state')}</span>
  </div>
)

export default Description
