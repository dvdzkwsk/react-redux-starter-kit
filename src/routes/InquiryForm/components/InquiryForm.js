import Immutable from 'immutable'
import React, { PropTypes } from 'react'
import Question from './Question'
import { debounce } from 'lodash'
import $ from 'jquery'
import 'pickadate/lib/picker.date'
import 'pickadate/lib/picker.time'
import 'pickadate/lib/themes/classic.css'
import { findDOMNode } from 'react-dom'
import './InquiryForm.scss'

export class InquiryForm extends React.Component {
  componentDidMount () {
    this.props.onComponentDidMount && this.props.onComponentDidMount()

    var datePicker = $(this.refs.datepicker).pickadate({
      formatSubmit: 'yyyy-m-d'
    })

    var timePicker = $(this.refs.timepicker).pickatime({
      format: 'HH:i',
      formatSubmit: 'HH:i',
      interval: 30,
      max: [22, 0],
      min: [8, 0]
    })
  }

  handleChange = debounce(function (e) {
    this.props.validatePromoCode(this.refs.promoCodeInput.value)
  }, 500)

  render () {
    return (
      <div className="panel">
        <div className="inquiry-form">
          <form>
            <fieldset className='form-group'>
              <legend>Packages</legend>
              <div className="form packages">
                {
                  this.props.service.get('packages', []).map(function (pkg, index) {
                    return (
                      <span key={index} className="radio">
                        <label>
                          <input type='radio' value={pkg.get('id')}/>
                          {pkg.get('name')} - ฿{pkg.get('price_satangs') / 100}
                        </label>
                      </span>
                    )
                  })
                }
              </div>
            </fieldset>

            <fieldset className='form-group'>
              <legend>Questions</legend>
              {
                this.props.service.get('questions', []).map(function (question, index) {
                  return <Question key={index} question={question} />
                })
              }
            </fieldset>

            <fieldset className='form-group'>
              <legend>Date Time</legend>
              <div className="form datetime">
                <div className="date">
                  <input ref="datepicker" type="text" placeholder="Date"
                    onClick={this.componentDidMount.datepicker}/>
                </div>
                <div className="time">
                  <input ref="timepicker" type="text" placeholder="Time"
                    onClick={this.componentDidMount.timepicker}/>
                </div>
              </div>
            </fieldset>

            <fieldset className='form-group'>
              <legend>Address</legend>
              <div className="form">
              </div>
            </fieldset>

            <fieldset className='form-group'>
              <legend>Additional Information</legend>
              <div className="form additional">
                <div className="note">
                  <textarea placeholder="Notes and special requests"/>
                </div>
                <div className="promo-code">
                  <input type="text" placeholder="Promo Code" ref="promoCodeInput" onChange={::this.handleChange} />
                  <div className="promo-status">{this.props.promoCode.get('value')}</div>
                </div>
              </div>
            </fieldset>

            <fieldset className='form-group'>
              <legend>Attachments</legend>
              <div className="form attachment">
                <button className="btn">Add Attachment</button>
              </div>
            </fieldset>
            <input type="submit" value="Create ใบสั่งงาน" id="submitButton" />
          </form>
        </div>

        <div className="terms-panel">
          <div className="header">
            <h3 className="title">Terms and Conditions</h3>
          </div>
          <div className="body">
            <div className="descriptions">
              <p>
                - Transportation fees are included in the package.
                <br />- Service include basic cleaning such as sweeping and mopping, however special request can be made to clean some specific point.
                <br />- Ironing and Laundry service within the service period will be surcharged 100 Baht (maid needs a training)
                <br />- Service available in Bangkok, Pathumtani, Samutprakan, Nonthaburi, Samutsakorn.
                <br />- Any inconvenience or comments can be notify through Seekster so we can take actions upon service vendors (points deduct/banned/indemnify)
                <br />- Seekster holds the rights to refuse service request if it is abusive and found to be threat to our vendors or obliged to the laws and ethic of Kingdom of Thailand.
                <br />- Payments are not refundable.
              </p>
              <p>
                Seekster have a strict procedure in sourcing a vendors and getting them on the system.
                We interviewed each vendors and get them to verify themselves by submitting their legal documents.
                We told and remind every vendors to restricted from any action with is unlawful and obliged to the laws and ethic of Kingdom of Thailand.
                However, each individual has a free will of their actions so we can't be 100% sure of the actions.
                We encourage you to keep your valuable belongings safe.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default InquiryForm
