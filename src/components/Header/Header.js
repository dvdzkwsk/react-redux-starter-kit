import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit</h1>
    <IndexLink to='/' activeClassName='route--active'>
      <span className="fa fa-home"/> Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      <span className="fa fa-clock-o"/> Counter
    </Link>
  </div>
)

export default Header
