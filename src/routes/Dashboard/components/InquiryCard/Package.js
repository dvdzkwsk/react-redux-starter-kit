import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export const Package = (props) => {
  if (props.package) {
    return (
      <div className="package">
        <span className="title">Package</span>
        <span className="name">{props.package.get('name')} - ฿{props.package.get('price_satangs') / 100}</span>
      </div>
    )
  } else {
    return null
  }
}

export default Package
