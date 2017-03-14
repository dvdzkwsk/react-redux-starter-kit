import Immutable from 'immutable'
import React from 'react'
import { Link } from 'react-router'
import Category from './Category'
import './Services.scss'

export class Categories extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount && this.props.onComponentDidMount()
  }

  render () {
    return (
      <div>
        <div className="services-nav">
          <div className="services-nav-group services-nav-left">
            <h3 className="services-nav-title">All Services</h3>
          </div>
          <div className="services-nav-group services-nav-center"></div>
          <div className="services-nav-group services-nav-right">
            <ul className="services-nav-actions">
              <li>
                <Link to="">New Inquiry</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {
            this.props.categories.map(function (category, index) {
              return category && <Category key={index} category={category} />
            })
          }
        </div>
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: Immutable.List()
}

export default Categories
