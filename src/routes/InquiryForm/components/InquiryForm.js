import Immutable from 'immutable'
import React, { PropTypes } from 'react'

export class InquiryForm extends React.Component {

  render () {
    return (
      <div>
        <div>
          {
            this.props.activeInquiryForm.map(function (item, index) {
              return (
                
              )
            }
          }
        </div>
      </div>
    )
  }
}

InquiryForm.defaultProps = {
  newInquiryForm: Immutable.List()
}

export default InquiryForm
