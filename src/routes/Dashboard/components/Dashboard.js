import React, { PropTypes } from 'react'
import InquiryCard from './InquiryCard'
import DashboardNav from './DashboardNav'

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }

  render () {
    return (
      <div>
        <DashboardNav />
        <div style={{padding: '10px'}}>
          {
            this.props.activeInquiries.map(function (item, index) {
              return <InquiryCard key={index} inquiry={item} styles={{margin: '10px'}}/>
            })
          }
        </div>
      </div>
    )
  }
}

Dashboard.defaultProps = {
  activeInquiries: []
}

export default Dashboard
