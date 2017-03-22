import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import PaymentSummary from './PaymentSummary'
import Answers from './Answers'
import Actions from './Actions'
import StateTag from 'components/StateTag'

export class Details extends React.Component {

  render () {
    var inquiry = this.props.inquiry

    return (
      <div className="panel panel-detail">

        <div className="detail-header">
          <h3 className="panel-title title">{inquiry.get('service').get('name')}</h3>
          <StateTag value={inquiry.get('state')} />
        </div>

        <div className="panel-body detail-body">
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

            <li>
              <i className="fa fa-phone fa-fw" title="Phone"></i>
              <p>{inquiry.get('phone_number')}</p>
            </li>
          </ul>

          <PaymentSummary inquiry={inquiry} />

          <Answers answer={inquiry.get('answers')} />

        </div>

        <Actions inquiry={inquiry} cancelInquiry={this.props.cancelInquiry} />

      </div>
    )
  }
}

export default Details
