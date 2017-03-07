import React from 'react'
import { Link } from 'react-router'

export const ServicesList = (props) => (
  <div>
    <div>
      <h3>{props.category.name}</h3>
    </div>
    <div>
      <ul>
        { props.category.services.map(function (item, index) {
          return (
            <li key={index}>
              <Link to={`/inquiries/new?service=${item.slug}`}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default ServicesList
