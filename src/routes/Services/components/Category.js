import Immutable from 'immutable'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export class Category extends React.Component {
  render () {
    const { category } = this.props

    return (
      <div className="services-material-panel">
        <div className="header">
          <h3 className="title">{category.get('name')}</h3>
        </div>
        <div className="body">
          <ul className="details">
            { category.get('services', Immutable.List()).map(function (service, index) {
              return (
                <li key={index}>
                  <img className="icon" src={service.get('icon')} />
                  <Link to={`/inquiries/new?service=${service.get('slug')}`}>{service.get('name')}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

Category.propTypes = {
  category: PropTypes.object.isRequired
}

Category.defaultProps = {
  category: Immutable.Map()
}

export default Category
