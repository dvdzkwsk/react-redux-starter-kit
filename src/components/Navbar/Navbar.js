import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Navbar.scss'

export class Navbar extends React.Component {
  logout (e) {
    e.preventDefault()
    this.props.logout()
  }

  render () {
    var menuItems = [
      this.props.isLoggedIn && <Link to='/dashboard'>Dashboard</Link>,
      this.props.isLoggedIn && <Link to='/logout' onClick={(e) => this.logout(e)}>Logout</Link>,
      !this.props.isLoggedIn && <Link to='/login'>Login</Link>
    ]

    return (
      <nav>
        <div className='brand'>
          <IndexLink to='/'>Seekster</IndexLink>
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

export default Navbar
