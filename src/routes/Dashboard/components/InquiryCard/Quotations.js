import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export class Quotations extends React.Component {

  render () {
    if (this.props.quotations && !this.props.quotations.isEmpty()) {
      return (
        <div>
          <p className="quotations-title">Quotations</p>
          <ul className='quotations'>
            {
              this.props.quotations.map(function (item, index) {
                return (
                  <li key={index}>
                    <Link to={`/quotations/${item.get('order_number')}`}>
                      <img className="quotation-business-avatar" src={item.get('business').get('avatar')}/>
                      <span className="business">{item.get('business').get('name')}</span>
                      <span className="price">฿{item.get('price_satangs') / 100}</span>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
      )
    }
    else {
      return null
    }
  }
}

export default Quotations
