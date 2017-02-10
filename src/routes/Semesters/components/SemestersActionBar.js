import React from 'react'
import Paper from 'material-ui/Paper';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation'
import Add from 'material-ui/svg-icons/content/add'
import Edit from 'material-ui/svg-icons/image/edit'
import Info from 'material-ui/svg-icons/action/info'
import Delete from 'material-ui/svg-icons/action/delete'
import Search from 'material-ui/svg-icons/action/search'
import { mode } from '../modules/semestersMainView'

export const ActionBar = (props) => (
  <Paper zDepth={0} style={{textAlign: 'center'}}>
    <BottomNavigation selectedIndex={props.selectedIndex} style={{display:'inline'}}>
      <BottomNavigationItem label='add' icon={<Add />} onClick={() => { props.modeButtonClick(mode.add); props.semesterClick(null) }} />
      <BottomNavigationItem label='edit' icon={<Edit />} onClick={() => props.modeButtonClick(mode.edit)} />
      <BottomNavigationItem label='info' icon={<Info />} onClick={() => props.modeButtonClick(mode.info)} />
      <BottomNavigationItem label='remove' icon={<Delete />} onClick={() => props.modeButtonClick(mode.remove)} />
    </BottomNavigation>
    <BottomNavigation selectedIndex={props.showSearchBar} style={{display:'inline'}}>
      <BottomNavigationItem label='search' icon={<Search />} onClick={() => props.searchButtonClick()} />
    </BottomNavigation>
  </Paper>
)

export default ActionBar
