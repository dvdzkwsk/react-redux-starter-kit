import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import './InquiryCard.scss'

export const InquiryCard = (props) => (
  <div className="panel panel-inquiryCard" style={props.styles}>
    <div className="panel-header inquiryCard-header">
      <Link to={`/inquiries/${props.inquiry.get('order_number')}`}>
        <h3 className="panel-title title">{props.inquiry.get('order_number')}</h3>
        <h4 className="subtitle">{props.inquiry.get('service').get('name')}</h4>
        <span className="label">{props.inquiry.get('state')}</span>
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
      <div className="package">
        <span className="title">Package</span>
        <span className="name">{props.inquiry.get('package').get('name')} - ฿{props.inquiry.get('package').get('price_satangs') / 100}</span>
      </div>
      <div className="description">
        <p>{props.inquiry.get('state')}</p>
      </div>
    </div>
    
    <div className="panel-footer inquiryCard-actions">
      <Link className="panel-btn" to={`/inquiries/${props.inquiry.get('order_number')}`}>View Details</Link>
    </div>
  </div>
)

export default InquiryCard
