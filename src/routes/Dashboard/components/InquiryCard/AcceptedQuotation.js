import React from 'react'
import Moment from 'moment'
import Quotations from './Quotations'

export class AcceptedQuotation extends React.Component {

  render () {
    if (this.props.accepted_quotation) {
      return (
        <div className="quotation">
          <span className="title">
              <img className="quotation-business-avatar" src={this.props.accepted_quotation.get('business').get('avatar')}/>
              {this.props.accepted_quotation.get('business').get('name')}
          </span>
        </div>
      )
    } else {
      return <Quotations quotations={this.props.children} />
    }
  }
}

export default AcceptedQuotation
