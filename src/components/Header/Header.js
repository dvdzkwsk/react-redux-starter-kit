import React from 'react'
import FontAwesome from 'react-fontawesome'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap'
import './Header.scss'

export const Header = () => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Navbar.Link href='/'><FontAwesome name='home' /> GPA-App</Navbar.Link>
      </Navbar.Brand>
    </Navbar.Header>
      <Nav pullRight>
        <NavDropdown title={(<FontAwesome name='navicon' />)} id='settings' noCaret>
          <MenuItem disabled>Signed in as: [name here]</MenuItem>
          <MenuItem divider />
          <MenuItem><FontAwesome name='user' /> profile</MenuItem>
          <MenuItem divider />
          <MenuItem href='about'><FontAwesome name='question-circle' /> about</MenuItem>
          <MenuItem divider />
          <MenuItem><FontAwesome name='gear' /> settings</MenuItem>
          <MenuItem><FontAwesome name='sign-out' /> logout</MenuItem>
        </NavDropdown>
      </Nav>
  </Navbar>
)

export default Header
