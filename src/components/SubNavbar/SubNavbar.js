import React from 'react'
import { Link } from 'react-router'
import  './SubNavbar.scss'

export class SubNavbar extends React.Component {

  render () {
    return (
      <div className="sub-nav">
        <div className="sub-nav-group sub-nav-left">
          <h3 className="title">{this.props.title}</h3>
        </div>
        <div className="sub-nav-group sub-nav-center">
          {this.props.children}
        </div>
        <div className="sub-nav-group sub-nav-right">
          <ul className="sub-nav-actions">
            <li>
              <Link to="/services">New Inquiry</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default SubNavbar
