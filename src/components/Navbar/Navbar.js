import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Navbar.scss'

export class Navbar extends React.Component {
  logout (e) {
    e.preventDefault()
    this.props.logout(e)
  }

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
            <img src="https://beta.seekster.co/assets/seekster_logo-f983f395de7fa5bde6c7536fcac604b926e774c0ce8b7f0bdddf46bce73f0841.png" />
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

export default Navbar
