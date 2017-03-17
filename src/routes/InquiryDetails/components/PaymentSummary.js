import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export const PaymentSummary = (props) => {

  if (props.inquiry.get('package')) {
    return (
      <div className="payment-summary">
        <table className="table">
          <tbody>
            <tr>
              <td>{props.inquiry.get('service').get('name')} - {props.inquiry.get('package').get('name')}</td>
              <td className="value">฿{props.inquiry.get('package').get('price_satangs') / 100}</td>
            </tr>
            <tr>
              <td className="total">TOTAL</td>
              <td className="value">฿{props.inquiry.get('package').get('price_satangs') / 100}</td>
            </tr>
          </tbody>
        </table>
        <p className="payment"> Method of Payment
          <span className="payment-type">{props.inquiry.get('payment_method')}</span>
        </p>
      </div>
    )

  } else {

    if (props.inquiry.get('accepted_quotation') == null) {
      return null
    } else {
      return (
        <div className="payment-summary">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  {props.inquiry.get('service').get('name')} <br/>
                  <small>by {props.inquiry.get('accepted_quotation').get('business').get('name')}</small>
                </td>
                <td className="value">฿{props.inquiry.get('discounted_price') / 100}</td>
              </tr>
              <tr>
                <td className="total">TOTAL</td>
                <td className="value">฿{props.inquiry.get('discounted_price') / 100}</td>
              </tr>
            </tbody>
          </table>
          <p className="payment"> Method of Payment
            <span className="payment-type">{props.inquiry.get('payment_method')}</span>
          </p>
        </div>
      )
    }
  }
}

export default PaymentSummary
