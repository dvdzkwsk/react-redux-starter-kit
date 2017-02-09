import React from 'react'
import AppBar from 'material-ui/AppBar'
import './Header.scss'

export const Header = (props) => (
  <AppBar
    iconClassNameLeft='fa fa-home'
    title=' GPA-App'
    iconClassNameRight='fa fa-bars'
    onRightIconButtonTouchTap={props.toggle}
  />
)

export default Header
