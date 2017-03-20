import Immutable from 'immutable'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Details from './Details'
import SubNavbar from 'components/SubNavbar'
import Quotations from './Quotations'
import './Inquiry.scss'

export class Inquiry extends React.Component {
  componentDidMount() {
    this.props.getInquiry && this.props.getInquiry(this.props.inquiryId)
  }

  render () {
    if (this.props.inquiry) {
      return (
        <div>
          <SubNavbar title={this.props.params.id} />
          <div style={{padding: '10px'}} className="bg">
            <div className="panel-detail-left">
              <Details inquiry={this.props.inquiry} />
            </div>

            <div className="panel-detail-right">
              <div className="panel panel-detail">
                <div className="panel-header detail-header">
                  <h3 className="panel-title title">Current Status</h3>
                </div>
                <div className="panel-body">
                  <div className="description">
                    <div className="text">Sit back, relax and get ready for your booking day.</div>
                  </div>
                </div>
              </div>

              <Quotations provider={this.props.inquiry.get('accepted_quotation')}
                quotations={this.props.inquiry.get('quotations')} />

            </div>
          </div>
        </div>
      )
    }
    else {
      return null
    }
  }
}

export default Inquiry
