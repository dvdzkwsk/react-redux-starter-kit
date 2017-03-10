import React from 'react'
import { Link } from 'react-router'

export const ServicesList = (props) => (
  <div className="services-material-panel">
    <div className="header">
      <h3 className="title">{props.category.get('name')}</h3>
    </div>
    <div className="body">
      <ul className="details">
        { props.category.get('services').map(function (item, index) {
          return (
            <li key={index}>
              <img className="icon" src={item.get('icon')} />
              <Link to={`/inquiries/new?service=${item.get('slug')}`}>{item.get('name')}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default ServicesList
