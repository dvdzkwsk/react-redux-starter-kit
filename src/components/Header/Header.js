import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'
import './Header.scss'

export const Header = (props) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Navbar.Link href='/'><FontAwesome name='home' /> GPA-App</Navbar.Link>
      </Navbar.Brand>
    </Navbar.Header>

    {props.loggedIn ? (
      <Nav pullRight>
        <NavDropdown title={(<FontAwesome name='navicon' />)} id='settings' noCaret>
          {props.user ? (<MenuItem disabled>Signed in as: {props.user.firstName} {props.user.surname}</MenuItem>) : ''}
          {props.user ? (<MenuItem divider />) : ''}
          <MenuItem><FontAwesome name='user' /> profile</MenuItem>
          <MenuItem divider />
          <MenuItem href='about'><FontAwesome name='question-circle' /> about</MenuItem>
          <MenuItem divider />
          <MenuItem><FontAwesome name='gear' /> settings</MenuItem>
          <MenuItem><FontAwesome name='sign-out' /> logout</MenuItem>
        </NavDropdown>
      </Nav>
    ) : ''}
  </Navbar>
)

export default Header
