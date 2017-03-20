import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import './InquiryCard.scss'
import Package from './Package'
import State from './State'
import Quotations from './Quotations'
import AcceptedQuotation from './AcceptedQuotation'
import Details from './Details'
import Description from './Description'

export const InquiryCard = (props) => (
  <div className="panel panel-inquiryCard">

    <div className="panel-header inquiryCard-header">
      <Link to={`/inquiries/${props.inquiry.get('order_number')}`}>
        <h3 className="panel-title title">{props.inquiry.get('order_number')}</h3>
        <h4 className="subtitle">{props.inquiry.get('service').get('name')}</h4>
        <State state={props.inquiry.get('state')} />
      </Link>
    </div>

    <div className="panel-body inquiryCard-body">

      <Details inquiry={props.inquiry}/>

      <Package package={props.inquiry.get('package')} />

      <AcceptedQuotation accepted_quotation={props.inquiry.get('accepted_quotation')}>
        { props.inquiry.get('quotations') }
      </AcceptedQuotation>

      <Description inquiry={props.inquiry} />

    </div>

    <div className="panel-footer">
      <div className="actions">
        <Link className="button" to={`/inquiries/${props.inquiry.get('order_number')}`}>View Details</Link>
      </div>
    </div>
  </div>
)

export default InquiryCard
