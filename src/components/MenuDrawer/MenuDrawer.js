import React from 'react'
import { browserHistory } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import AppBar from 'material-ui/AppBar'
import FontAwesome from 'react-fontawesome'

export const MenuDrawer = (props) => (
  <Drawer open={props.open} openSecondary>
    <AppBar onClick={props.toggle} title='Menu' />
    {props.loggedIn ? (<MenuItem><FontAwesome name='user' /> profile</MenuItem>) : ''}
    {props.loggedIn ? (<Divider />) : ''}
    <MenuItem><FontAwesome name='question-circle' /> about</MenuItem>
    <Divider />
    {props.loggedIn ? (<MenuItem><FontAwesome name='gear' /> settings</MenuItem>) : ''}
    {props.loggedIn ? (<MenuItem onClick={() => browserHistory.push('logout')}><FontAwesome name='sign-out' /> sign out</MenuItem>) : ''}
  </Drawer>
  // <Navbar fluid>
  //   <Navbar.Header>
  //     <Navbar.Brand>
  //       <Navbar.Link href='/'><FontAwesome name='home' /> GPA-App</Navbar.Link>
  //     </Navbar.Brand>
  //     <Navbar.Toggle />
  //   </Navbar.Header>
  //   {props.loggedIn ? (
  //     <Navbar.Collapse>
  //       <Nav>
  //         {props.user ? (<NavItem disabled>Signed in as: {props.user.firstName} {props.user.surname}</NavItem>) : ''}
  //         <NavItem><FontAwesome name='user' /> profile</NavItem>
  //         <NavItem href='about'><FontAwesome name='question-circle' /> about</NavItem>
  //         <NavItem><FontAwesome name='gear' /> settings</NavItem>
  //       </Nav>
  //       <Nav pullRight>
  //         <NavItem onClick={() => browserHistory.push('logout')}><FontAwesome name='sign-out' /> logout</NavItem>
  //       </Nav>
  //     </Navbar.Collapse>
  //   ) : ''}
  // </Navbar>
)

export default MenuDrawer
