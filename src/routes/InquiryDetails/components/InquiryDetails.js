import Immutable from 'immutable'
import React, { PropTypes } from 'react'
import InquiryCard from 'routes/Dashboard/components/InquiryCard'

export class InquiryDetails extends React.Component {
  componentDidMount() {
    this.props.getInquiry && this.props.getInquiry(this.props.params.id)
  }

  render () {
    if (this.props.inquiry) {
      return (
        <div>
          <InquiryCard inquiry={this.props.inquiry} styles={{margin: '10px'}}/>
        </div>
      )
    }
    else {
      return null
    }
  }
}

export default InquiryDetails
