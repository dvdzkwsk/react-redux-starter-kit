import React from 'react'
import 'styles/core.scss'

import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap'

// Note: Stateless/function components *will not* hot reload!
// react-transform *only* works on component classes.
//
// Since layouts rarely change, they are a good place to
// leverage React's new Statelesss Functions:
// https://facebook.github.io/react/docs/reusable-components.html#stateless-functions
//
// CoreLayout is a pure function of it's props, so we can
// define it with a plain javascript function...
function CoreLayout ({ children }) {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>Company Logo Here</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
      {children}
      <footer className='main-footer'>
        <div className='text-center small'>
          <p>
            <strong>Powered by RolePoint Inc © 2015 |
            <a href='http://www.rolepoint.com' target='_blank'>www.RolePoint.com</a>
            | <a href='mailto:support@rolepoint.com'>Support</a>
            | <a href='http://www.rolepoint.com/terms' target='_blank'>Terms of Use</a>
            | <a href='http://www.rolepoint.com/privacy' target='_blank'>Privacy Policy</a>
            </strong>
          </p>
        </div>
      </footer>
    </div>
  )
}

CoreLayout.propTypes = {
  children: React.PropTypes.element
}

export default CoreLayout
