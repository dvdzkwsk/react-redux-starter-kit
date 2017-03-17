import Immutable from 'immutable'
import React, { PropTypes } from 'react'
import InquiryCard from './InquiryCard'
import SubNavbar from 'components/SubNavbar'
import { Link } from 'react-router'

export class Dashboard extends React.Component {
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
          {
            this.props.activeInquiries.map(function (item, index) {
              return <InquiryCard key={index} inquiry={item} />
            })
          }
        </div>
      </div>
    )
  }
}

Dashboard.defaultProps = {
  activeInquiries: Immutable.List()
}

export default Dashboard
