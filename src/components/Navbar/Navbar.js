import React, { PropTypes } from 'react'
import { IndexLink, Link } from 'react-router'
import './Navbar.scss'
import logo from 'assets/seekster_logo_with_name_black.png'

export class Navbar extends React.Component {
  render () {
    var menuItems = [
      this.props.isLoggedIn && <Link to='/dashboard'>Dashboard</Link>,
      this.props.isLoggedIn && <Link to='/logout' onClick={this.props.logout}>Logout</Link>,
      !this.props.isLoggedIn && <Link to='/login'>Login</Link>
    ]

    return (
      <nav>
        <div className='brand'>
          <IndexLink to='/'>
            <img src={logo} />
          </IndexLink>
        </div>
        <ul className='menu-items'>
          {
            menuItems.map(function (item, index) {
              return item && <li className='menu-item' key={index}>{item}</li>
            })
          }
        </ul>
      </nav>
    )
  }
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,

  logout: PropTypes.func
}

export default Navbar
