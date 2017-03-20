import React from 'react'
import Moment from 'moment'
import Quotations from './Quotations'

export const AcceptedQuotation = (props) => {
  if (props.accepted_quotation) {
    return (
      <div className="quotation">
        <span className="title">
            <img className="quotation-business-avatar" src={props.accepted_quotation.get('business').get('avatar')}/>
            {props.accepted_quotation.get('business').get('name')}
        </span>
      </div>
    )
  } else {
    return <Quotations quotations={props.children} />
  }
}

export default AcceptedQuotation
