import Immutable from 'immutable'
import React from 'react'
import { Link } from 'react-router'
import ServicesList from './ServicesList'
// import './Services.scss'

export class Services extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }

  render () {
    return (
      <div>
        <div>
          {
            this.props.allServices.map(function (item, index) {
              return <ServicesList key={index} category={item}/>
            })
          }
          <Link to='/InquiryForm'>Inquiry Form</Link>
        </div>
      </div>
    )
  }
}

Services.defaultProps = {
  allServices: Immutable.List()
}


export default Services
