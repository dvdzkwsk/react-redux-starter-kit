import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import { isEmpty, debounce } from 'lodash'

export class PromoCode extends React.Component {

  handleChange = debounce(function (e) {
    this.props.validatePromoCode(this.refs.promoCodeInput.value)
  }, 500)

  render () {
    if (this.props.packages.isEmpty()) {
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
}

export default Promocode
