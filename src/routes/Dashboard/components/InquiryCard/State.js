import React from 'react'
import Moment from 'moment'

export const Package = (props) => {
  if (props.state) {
    return (
      <span className="label">{props.state}</span>
    )
  } else {
    return null
  }
}

export default Package
