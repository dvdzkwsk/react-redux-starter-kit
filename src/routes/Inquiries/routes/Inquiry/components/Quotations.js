import Immutable from 'immutable'
import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import Rating from 'components/Rating'

export class Quotations extends React.Component {

  render () {
    var quotations = this.props.quotations
    var provider = this.props.provider

    if (provider == null) {
      if (quotations == null || quotations.isEmpty()) {
        return null
      } else {
        return (
          <div className="quotations">
            <h3>Quotations</h3>
            {
              quotations.map(function (item, index) {
                return (
                  <div className="panel panel-detail" key={index}>
                    <div className="avatar">
                      <img src={item.get('business').get('avatar')}/>
                    </div>
                    <div className="body with-avatar">
                      <h4>{item.get('business').get('name')}</h4>
                      <p className="content">{item.get('message')}</p>
                    </div>

                    <Rating rating={item.get('business').get('average_rating')} />

                    <div className="panel-footer">
                      <div className="actions">
                        <span className="label">Price = ฿{item.get('price_satangs') / 100}</span>
                        <ul>
                          <li>
                            <Link to={`/quotations/${item.get('order_number')}`}>View Details</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        )
      }

    } else {
      return (
        <div className="provider">
          <h3>Your Provider</h3>
          <div className="panel panel-detail">
            <div className="avatar">
              <img src={provider.get('business').get('avatar')}/>
            </div>
            <div className="body with-avatar">
              <h4>{provider.get('business').get('name')}</h4>
              <p className="content">
                <i className="fa fa-phone fa-fw" />
                {provider.get('business').get('phone_number')}
              </p>
            </div>

            <Rating rating={provider.get('business').get('average_rating')} />


            <div className="panel-footer">
              <div className="actions">
                <a className="button" href={`tel:${provider.get('business').get('phone_number')}`}>
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Quotations
