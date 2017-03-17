import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import './InquiryCard.scss'
import Package from './Package'
import State from './State'

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
      <ul className="details">
        <li>
          <i className="fa fa-info fa-fw" title="Order Number"></i>
          {props.inquiry.get('order_number')}
        </li>

        <li>
          <i className="fa fa-clock-o fa-fw" title="Booking Time"></i>
          {Moment(props.inquiry.get('booking_datetime')).format('h:mm a')}
        </li>

        <li>
          <i className="fa fa-calendar-o fa-fw" title="Booking Date"></i>
          {Moment(props.inquiry.get('booking_datetime')).format('Do MMMM YYYY')}
        </li>

        <li>
          <i className="fa fa-map-marker fa-fw" title="Address"></i>
          <p>{props.inquiry.get('address').get('long')} {props.inquiry.get('address').get('zip_code')}</p>
        </li>
      </ul>

      <Package package={props.inquiry.get('package')} />

      <div className="description">
        <p>{props.inquiry.get('state')}</p>
      </div>
    </div>

    <div className="panel-footer">
      <div className="actions">
        <Link className="button" to={`/inquiries/${props.inquiry.get('order_number')}`}>View Details</Link>
      </div>
    </div>
  </div>
)

export default InquiryCard
