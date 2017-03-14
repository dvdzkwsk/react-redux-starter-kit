import Immutable from 'immutable'
import Moment from 'moment'
import React, { PropTypes } from 'react'
import SubNavbar from 'components/SubNavbar'
import { Link } from 'react-router'
import './InquiriesHistory.scss'

export class InquiriesHistory extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }

  render () {
    return (
      <div>
        <SubNavbar title="Dashboard">
          <ul className="navigation">
            <li className={this.props.location.pathname == '/dashboard' ? 'active' : ''}>
              <Link to='/dashboard'>Active Requests</Link>
            </li>
            <li className={this.props.location.pathname == '/history' ? 'active' : ''}>
              <Link to='/history'>Inactive Requests</Link>
            </li>
          </ul>
        </SubNavbar>
        <div style={{padding: '10px'}}>
          <div className="panel panel-inactive">
            <div className="table-inactive">
              <table className="inquiries-table">
                <thead>
                  <tr>
                    <th>Order Numbre</th>
                    <th>Service</th>
                    <th>Package</th>
                    <th>Booking Date</th>
                    <th>State</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.props.inactiveInquiries.map(function (item, index) {
                    return (
                        <tr key={index}>
                            <td>
                              <Link to=''>{item.get('order_number')}</Link>
                            </td>
                            <td>{item.get('service').get('name')}</td>
                            <td>{item.get('package') ? item.get('package').get('name') : '-'}</td>
                            <td>{Moment(item.get('booking_datetime')).format('MMMM, D YYYY HH:mm')}</td>
                            <td>
                              <span className="label">{item.get('state')}</span>
                            </td>
                            <td><Link to={`/inquiries/${item.get('order_number')}`} className="btn">View Details</Link></td>
                        </tr>
                    )

                  })
                }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

InquiriesHistory.defaultProps = {
  inactiveInquiries: Immutable.List()
}

export default InquiriesHistory
