import React from 'react'
import { browserHistory } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

import './Header.scss'

export const Header = (props) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Navbar.Link onClick={() => browserHistory.push('/')} style={{ cursor: 'pointer' }}><FontAwesome name='home' /> GPA-App</Navbar.Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    {props.loggedIn ? (
      <Navbar.Collapse>
        <Nav>
          {props.user ? (<NavItem disabled>Signed in as: {props.user.firstName} {props.user.surname}</NavItem>) : ''}
          <NavItem onClick={() => browserHistory.push('/profile')}><FontAwesome name='user' /> Profile</NavItem>
          <NavItem onClick={() => browserHistory.push('/about')}><FontAwesome name='question-circle' /> About</NavItem>
          <NavItem onClick={() => browserHistory.push('/settings')}><FontAwesome name='gear' /> Settings</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem onClick={() => browserHistory.push('/logout')}><FontAwesome name='sign-out' /> Sign out</NavItem>
        </Nav>
      </Navbar.Collapse>
    ) : ''}
  </Navbar>
)

export default Header
