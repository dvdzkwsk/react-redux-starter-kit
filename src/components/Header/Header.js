import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'
// TODO fix hamburger menu
export const Header = () => (
  <div className='navbar navbar-default'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse-1' aria-expanded='false'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <IndexLink to='/' className='navbar-brand' activeClassName='active'>
          Ad Director
        </IndexLink>
      </div>
      <div className='collapse navbar-collapse' id='navbar-collapse-1'>
        <ul className='nav navbar-nav'>
          <li>
            <Link to='/rule/new' activeClassName='active'>
              Create Rule
            </Link>
          </li>
          <li>
            <Link to='/rules' activeClassName='active'>
              View/Edit Rules
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
