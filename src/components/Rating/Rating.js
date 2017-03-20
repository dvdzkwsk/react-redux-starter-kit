import React from 'react'
import { Link } from 'react-router'
import './Rating.scss'
import { times } from 'lodash'

export const Rating = (props) => {
  if (props.rating == null) {
    return null
  } else {
    return (
      <div className="rating">
        {
          times(Math.floor(props.rating), (index) => {
            return (
              <i className="fa fa-star fa-fw" key={index} />
            )
          })
        }
        {
          times(5 - Math.floor(props.rating), (index) => {
            return (
              <i className="fa fa-star-o fa-fw" key={index} />
            )
          })
        }
      </div>
    )
  }
}

export default Rating
