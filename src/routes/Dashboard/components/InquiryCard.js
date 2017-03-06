import React from 'react'
// import './InquiryCard.scss'

export const InquiryCard = (props) => (
  <div>
    <div>{props.inquiry.order_number}</div>
    <div>{props.inquiry.service.name}</div>
  </div>
)

export default InquiryCard
