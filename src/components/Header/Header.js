import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export class Header extends React.Component {

  render () {
    return (
      <div>
        <h1>React Redux Starter Kit</h1>
        <IndexLink to='/' activeClassName='route--active'>
          Home
        </IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='route--active'>
          Counter
        </Link>
      </div>
    )
  }
)

export default Header
