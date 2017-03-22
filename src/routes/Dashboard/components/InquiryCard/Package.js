import React from 'react'
import Moment from 'moment'

export class Package extends React.Component {

  render () {
    if (this.props.package) {
      return (
        <div className="package">
          <span className="title">Package</span>
          <span className="name">{this.props.package.get('name')} - ฿{this.props.package.get('price_satangs') / 100}</span>
        </div>
      )
    }
    else {
      return null
    }
  }
}

export default Package
