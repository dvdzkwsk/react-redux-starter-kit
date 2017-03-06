import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Navbar.scss'

export const Navbar = (props) => {

  var menuItems = [
    props.isLoggedIn ? <Link to='/dashboard'>Dashboard</Link> : null,
    !props.isLoggedIn ? <Link to='/login'>Login</Link> : null,
    props.isLoggedIn ? <Link to='/'>Logout</Link> : null
  ]

  return (
    <nav>
      <div className='brand'>
        <IndexLink to='/'>
          Seekster
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

export default Navbar
