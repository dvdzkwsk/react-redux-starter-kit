import Immutable from 'immutable'
import React from 'react'
import { Link } from 'react-router'
import ServicesList from './ServicesList'
import './Services.scss'

export class Services extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }

  render () {
    return (
      <div>
        <div className="services-nav">
          <div className="services-nav-group services-nav-left">
            <h3 className="title">All Services</h3>
          </div>
          <div className="services-nav-group services-nav-center"></div>
          <div className="services-nav-group services-nav-right">
            <ul className="actions">
              <li>
                <Link to="">New Inquiry</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          {
            this.props.allServices.map(function (item, index) {
              return <ServicesList key={index} category={item}/>
            })
          }
        </div>
      </div>
    )
  }
}

Services.defaultProps = {
  allServices: Immutable.List()
}

export default Services
