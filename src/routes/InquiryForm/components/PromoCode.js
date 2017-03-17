import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import { isEmpty, debounce } from 'lodash'

export const PackagesFieldSet = (props) => {

  handleChange = debounce(function (e) {
    this.props.validatePromoCode(this.refs.promoCodeInput.value)
  }, 500)

  if (props.packages.isEmpty()) {
    return null
  } else {
    return (
      <div className="promo-code">
        <input type="text" placeholder="Promo Code" ref="promoCodeInput" onChange={::this.handleChange} />
        <div className="promo-status">{this.props.promoCode.get('value')}</div>
      </div>
    )
  }
}

export default PackagesFieldSet
