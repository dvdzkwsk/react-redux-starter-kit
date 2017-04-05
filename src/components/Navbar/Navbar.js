import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Navbar.scss'

export const Navbar = () => (
  <nav>
    <div className='brand'>
      <IndexLink to='/'>
        Seekster
      </IndexLink>
    </div>
    <ul className='menu-items'>
      <li className='menu-item'><Link to='/login'>Login</Link></li>
    </ul>
  </nav>
)

export default Navbar
