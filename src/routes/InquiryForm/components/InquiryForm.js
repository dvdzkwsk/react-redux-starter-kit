import Immutable from 'immutable'
import React, { PropTypes } from 'react'
import Question from './Question'
import { debounce } from 'lodash'
import $ from 'jquery'
import 'pickadate/lib/picker.date'
import 'pickadate/lib/picker.time'
import 'pickadate/lib/themes/classic.css'
import { findDOMNode } from 'react-dom'

export class InquiryForm extends React.Component {
  componentDidMount () {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }

  dateTimePicker = () => {
    var date = $(findDOMNode(this.refs.datepicker))
    var time = $(findDOMNode(this.refs.timepicker))

    var datePicker = date.pickadate({
      formatSubmit: 'yyyy-m-d'
    })

    var timePicker = time.pickatime({
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
      <div>
        <form>
          <fieldset className='form-group'>
            <legend>Packages</legend>
            {
              this.props.callService.get('packages', []).map(function (pkg, index) {
                return (
                  <label key={index}>
                    <input type='radio' value={pkg.get('id')}/>
                    {pkg.get('name')}
                  </label>
                )
              })
            }
          </fieldset>

          <fieldset className='form-group'>
            <legend>Questions</legend>
            {
              this.props.callService.get('questions', []).map(function (question, index) {
                return <Question key={index} question={question} />
              })
            }
          </fieldset>

          <fieldset className='form-group'>
            <legend>Date Time</legend>
            <div>
              <input ref="datepicker" type="text" placeholder="date"
                onClick={this.componentDidMount.datePicker}/>
            </div>
            <div>
              <input ref="timepicker" type="text" placeholder="Time"
                onClick={this.componentDidMount.timePicker}/>
            </div>
          </fieldset>

          <fieldset className='form-group'>
            <legend>Address</legend>
          </fieldset>

          <fieldset className='form-group'>
            <legend>Additional Information</legend>
            <div className="note">
              <textarea placeholder="Notes and special requests"/>
            </div>
            <div className="promo-code">
              <input type="text" placeholder="Promo Code" ref="promoCodeInput" onChange={::this.handleChange} />
              <div className="promo-status">{this.props.promoCode.get('value')}</div>
            </div>
          </fieldset>

          <fieldset className='form-group'>
            <legend>Attachments</legend>
            <div className="link">
              <button>Add Attachment</button>
            </div>
          </fieldset>
          <input type="submit" value="Create ใบสั่งงาน" id="submitButton" />
        </form>
      </div>
    )
  }
}

export default InquiryForm
