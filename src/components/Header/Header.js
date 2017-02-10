import React from 'react'
import AppBar from 'material-ui/AppBar'
import Menu from 'material-ui/svg-icons/navigation/menu'
import './Header.scss'

export const Header = (props) => (
  <AppBar
    showMenuIconButton={false}
    title=' GPA-App'
    iconElementRight={<Menu />}
    onRightIconButtonTouchTap={props.toggle}
  />
)

export default Header
