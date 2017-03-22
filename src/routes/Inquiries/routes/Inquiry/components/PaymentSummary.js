import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export class PaymentSummary extends React.Component {

  render () {
    var inquiry = this.props.inquiry

    if (inquiry.get('package')) {
      return (
        <div className="payment-summary">
          <table className="table">
            <tbody>
              <tr>
                <td>{inquiry.get('service').get('name')} - {inquiry.get('package').get('name')}</td>
                <td className="value">฿{inquiry.get('package').get('price_satangs') / 100}</td>
              </tr>
              <tr>
                <td className="total last">TOTAL</td>
                <td className="value last">฿{inquiry.get('package').get('price_satangs') / 100}</td>
              </tr>
            </tbody>
          </table>
          <p className="payment"> Method of Payment
            <span className="payment-type">{inquiry.get('payment_method')}</span>
          </p>
        </div>
      )

    } else {

      if (inquiry.get('accepted_quotation') == null) {
        return null
      } else {
        return (
          <div className="payment-summary">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    {inquiry.get('service').get('name')} <br/>
                    <small>by {inquiry.get('accepted_quotation').get('business').get('name')}</small>
                  </td>
                  <td className="value">฿{inquiry.get('discounted_price') / 100}</td>
                </tr>
                <tr>
                  <td className="total">TOTAL</td>
                  <td className="value">฿{inquiry.get('discounted_price') / 100}</td>
                </tr>
              </tbody>
            </table>
            <p className="payment"> Method of Payment
              <span className="payment-type">{inquiry.get('payment_method')}</span>
            </p>
          </div>
        )
      }
    }
  }
}

export default PaymentSummary
