import Immutable from 'immutable'
import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export class Actions extends React.Component {

  cancel (id) {
    confirm('Are you sure?') ? this.props.cancelInquiry(id) : null
  }

  render () {
    var today = Moment(new Date()).format('DDMMYY')
    var date = Moment(this.props.inquiry.get('booking_datetime')).format('DDMMYY')
    var order_number = this.props.inquiry.get('order_number')
    var id = this.props.inquiry.get('id')

    if (date < today) {
      return null
    }
    else {
     return (
       <div className="panel-footer">
         <div className="actions">
           <div className="row">
             <div className="one-half column">
               <Link to={`${order_number}/edit`} className="button edit">
                 Edit
               </Link>
             </div>
             <div className="one-half column">
               <button className="button cancel" onClick={() => {this.cancel(id)}}>
                 Cancel
               </button>
             </div>
           </div>
         </div>
       </div>
     )
    }
  }
}

export default Actions
