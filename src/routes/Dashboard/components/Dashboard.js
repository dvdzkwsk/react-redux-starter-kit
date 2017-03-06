import React from 'react'
import InquiryCard from './InquiryCard'

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }

  render () {
    return (
      <div>
        <h4>Dashboard!</h4>
        <div>
          {
            this.props.activeInquiries.map(function (item, index) {
              return <InquiryCard key={index} inquiry={item}/>
            })
          }
        </div>
      </div>
    )
  }
}

export default Dashboard
