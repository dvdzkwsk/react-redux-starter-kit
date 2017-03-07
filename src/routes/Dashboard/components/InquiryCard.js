import React from 'react'
import './InquiryCard.scss'

export const InquiryCard = (props) => (
  <div className="material-panel" style={props.styles}>
    <div className="header">
      <a href="">
        <h3 className="title">{props.inquiry.order_number}</h3>
        <h4 className="subtitle">{props.inquiry.service.name}</h4>
        <span className="label">{props.inquiry.state}</span>
      </a>
    </div>
    <div className="body">
      <ul className="details">
        <li>
          <i className="fa fa-info fa-fw" title="Order Number"></i>
          {props.inquiry.order_number}
        </li>
        <li>
          <i className="fa fa-clock-o fa-fw" title="Booking Time"></i>
          {props.inquiry.booking_time}
        </li>
        <li>
          <i className="fa fa-calendar-o fa-fw" title="Booking Date"></i>
          {props.inquiry.booking_date}
        </li>
        <li>
          <i className="fa fa-map-marker fa-fw" title="Address"></i>
          <p>{props.inquiry.address.long} {props.inquiry.address.zip_code}</p>
        </li>
      </ul>
      <div className="package">
        <span className="title">Package</span>
        <span className="name">{props.inquiry.package.name} - ฿{props.inquiry.package.price_satangs / 100}</span>
      </div>
      <div className="description">
        <p>{props.inquiry.state}</p>
      </div>
    </div>
    <div className="actions">
      <a className="btn" href="">View Details</a>
    </div>
  </div>
)

export default InquiryCard
