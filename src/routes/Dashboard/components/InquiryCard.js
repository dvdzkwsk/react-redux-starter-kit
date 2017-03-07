import React from 'react'
import { Link } from 'react-router'
import './InquiryCard.scss'

export const InquiryCard = (props) => (
  <div className="material-panel" style={props.styles}>
    <div className="header">
      <Link to={`/inquiries/${props.inquiry.get('order_number')}`}>
        <h3 className="title">{props.inquiry.get('order_number')}</h3>
        <h4 className="subtitle">{props.inquiry.get('service').get('name')}</h4>
        <span className="label">{props.inquiry.get('state')}</span>
      </Link>
    </div>
    <div className="body">
      <ul className="details">
        <li>
          <i className="fa fa-info fa-fw" title="Order Number"></i>
          {props.inquiry.get('order_number')}
        </li>
        <li>
          <i className="fa fa-clock-o fa-fw" title="Booking Time"></i>
          {props.inquiry.get('booking_time')}
        </li>
        <li>
          <i className="fa fa-calendar-o fa-fw" title="Booking Date"></i>
          {props.inquiry.get('booking_date')}
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
    <div className="actions">
      <Link className="btn" to={`/inquiries/${props.inquiry.get('order_number')}`}>View Details</Link>
    </div>
  </div>
)

export default InquiryCard
