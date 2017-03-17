import Immutable from 'immutable'
import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export const Confirmation = (props) => {
  var today = new Date()

  if (props.inquiry.get('booking_datetime') < today) {
    return null
  } else {
   return (
     <div className="panel-footer">
       <div className="actions">
         <div className="row">
           <div className="one-half column">
             <Link to={`inquiries/${props.inquiry.get('order_number')}/edit`} className="button edit">
               Edit
             </Link>
           </div>
           <div className="one-half column">
             <button className="button cancel" onClick={() => {}}>
               Cancel
             </button>
           </div>
         </div>
       </div>
     </div>
   )
  }
}

export default Confirmation
