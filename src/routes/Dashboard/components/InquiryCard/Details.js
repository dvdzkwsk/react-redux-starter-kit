import React from 'react'
import Moment from 'moment'

export class Details extends React.Component {

  render () {
    var inquiry = this.props.inquiry

    if (inquiry) {
      return (
        <ul className="details">
          <li>
            <i className="fa fa-info fa-fw" title="Order Number"></i>
            {inquiry.get('order_number')}
          </li>

          <li>
            <i className="fa fa-clock-o fa-fw" title="Booking Time"></i>
            {Moment(inquiry.get('booking_datetime')).format('h:mm a')}
          </li>

          <li>
            <i className="fa fa-calendar-o fa-fw" title="Booking Date"></i>
            {Moment(inquiry.get('booking_datetime')).format('Do MMMM YYYY')}
          </li>

          <li>
            <i className="fa fa-map-marker fa-fw" title="Address"></i>
            <p>{inquiry.get('address').get('long')} {inquiry.get('address').get('zip_code')}</p>
          </li>
        </ul>
      )
    }
    else {
      return null
    }
  }
}

export default Details
