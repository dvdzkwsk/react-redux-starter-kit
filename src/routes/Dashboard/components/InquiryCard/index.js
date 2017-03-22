import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import './InquiryCard.scss'
import Package from './Package'
import StateTag from 'components/StateTag'
import Quotations from './Quotations'
import AcceptedQuotation from './AcceptedQuotation'
import Details from './Details'
import Description from './Description'

export class InquiryCard extends React.Component {

  render () {
    var inquiry = this.props.inquiry

    return (
      <div className="panel panel-inquiryCard">

        <div className="panel-header inquiryCard-header">
          <Link to={`/inquiries/${inquiry.get('order_number')}`}>
            <h3 className="panel-title title">{inquiry.get('order_number')}</h3>
            <h4 className="subtitle">{inquiry.get('service').get('name')}</h4>
            <StateTag value={inquiry.get('state')} />
          </Link>
        </div>

        <div className="panel-body inquiryCard-body">

          <Details inquiry={inquiry}/>

          <Package package={inquiry.get('package')} />

          <AcceptedQuotation accepted_quotation={inquiry.get('accepted_quotation')}>
            { inquiry.get('quotations') }
          </AcceptedQuotation>

          <Description inquiry={inquiry} />

        </div>

        <div className="panel-footer">
          <div className="actions">
            <Link className="button" to={`/inquiries/${inquiry.get('order_number')}`}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default InquiryCard
