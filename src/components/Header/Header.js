import React from 'react'
import { browserHistory } from 'react-router'
import FontAwesome from 'react-fontawesome'
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap'
import './Header.scss'

export const Header = (props) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Navbar.Link href='/'><FontAwesome name='home' /> GPA-App</Navbar.Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    {props.loggedIn ? (
      <Navbar.Collapse>
        <Nav>
          {props.user ? (<NavItem disabled>Signed in as: {props.user.firstName} {props.user.surname}</NavItem>) : ''}
          <NavItem><FontAwesome name='user' /> profile</NavItem>
          <NavItem href='about'><FontAwesome name='question-circle' /> about</NavItem>
          <NavItem><FontAwesome name='gear' /> settings</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem onClick={() => browserHistory.push('logout')}><FontAwesome name='sign-out' /> logout</NavItem>
        </Nav>
      </Navbar.Collapse>
    ) : ''}
  </Navbar>
)

export default Header
