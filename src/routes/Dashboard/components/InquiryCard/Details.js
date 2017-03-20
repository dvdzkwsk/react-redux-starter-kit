import React from 'react'
import Moment from 'moment'

export const Details = (props) => {
  if (props.inquiry) {
    return (
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
    )
  } else {
    return null
  }
}

export default Details
