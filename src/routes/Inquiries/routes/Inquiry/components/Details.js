import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import PaymentSummary from './PaymentSummary'
import Answers from './Answers'
import Confirmation from './Confirmation'
import State from 'routes/Dashboard/components/InquiryCard/State'

export const Details = (props) => (
  <div className="panel panel-detail">

    <div className="detail-header">
      <h3 className="panel-title title">{props.inquiry.get('service').get('name')}</h3>
      <State state={props.inquiry.get('state')} />
    </div>

    <div className="panel-body detail-body">
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

        <li>
          <i className="fa fa-phone fa-fw" title="Phone"></i>
          <p>{props.inquiry.get('phone_number')}</p>
        </li>
      </ul>

      <PaymentSummary inquiry={props.inquiry} />

      <Answers answer={props.inquiry.get('answers')} />

    </div>

    <Confirmation inquiry={props.inquiry}/>

  </div>
)

export default Details
