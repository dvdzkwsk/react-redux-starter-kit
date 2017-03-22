import Immutable from 'immutable'
import React, { PropTypes } from 'react'
import InquiryCard from './InquiryCard'
import SubNavbar from 'components/SubNavbar'
import Navigation from 'components/SubNavbar/Navigation'
import { Link } from 'react-router'

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.getInquiries && this.props.getInquiries({ active: true })
  }

  render () {
    return (
      <div>
        <SubNavbar title="Dashboard">
          <Navigation path={this.props.location.pathname}/>
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
