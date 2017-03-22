import React from 'react'
import { Link } from 'react-router'
import './Rating.scss'
import { times } from 'lodash'

export class Rating extends React.Component {

  render () {
    if (this.props.rating == null) {
      return null
    } else {
      return (
        <div className="rating">
          {
            times(Math.floor(this.props.rating), (index) => {
              return (
                <i className="fa fa-star fa-fw" key={index} />
              )
            })
          }
          {
            times(5 - Math.floor(this.props.rating), (index) => {
              return (
                <i className="fa fa-star-o fa-fw" key={index} />
              )
            })
          }
        </div>
      )
    }
  }
}

export default Rating
