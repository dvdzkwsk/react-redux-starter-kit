import React from 'react'
import Moment from 'moment'

export class Description extends React.Component {

  render () {
    var description = null
    var inquiry = this.props.inquiry

    switch (inquiry.get('state')) {
      case 'pending_provider':
        if (inquiry.get('quotations') && !inquiry.get('quotations').isEmpty()) {
          description = 'Please select a quotation.'
        }
        else {
          description = 'Your request is now waiting a provider to respond.'
        }
        break;
      case 'pending_completion':
        description = 'Sit back, relax and get ready for your booking day.'
        break;
    }

    return (
      <div className='description'>
        <span>{description}</span>
      </div>
    )
  }
}

export default Description
