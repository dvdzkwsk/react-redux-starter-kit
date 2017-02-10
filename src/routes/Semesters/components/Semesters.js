import React from 'react'
import FontAwesome from 'react-fontawesome'
import {List, ListItem} from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import { mode } from '../modules/semestersMainView'
import SearchBar from '../containers/SearchBarContainer'
import ActionBar from '../containers/SemestersActionBarContainer'
import Add from 'material-ui/svg-icons/content/add'
import Edit from 'material-ui/svg-icons/image/edit'
import Info from 'material-ui/svg-icons/action/info'
import Delete from 'material-ui/svg-icons/action/delete'
import Search from 'material-ui/svg-icons/action/search'

export const Semesters = (props) => (
  <div>
    { props.fetched ? '' : props.loadSemesters() }
    { props.showSearchBar ? (<SearchBar />) : '' }
    <List>
    { props.filteredSemesters.map(semester => (
      <ListItem key={semester.id} onClick={() => props.semesterClick(semester.id)}>
        { semester.name }
      </ListItem>
    )) }
    </List>
    <FlatButton onClick={() => { props.modeButtonClick(mode.add); props.semesterClick(null) }}><FontAwesome name='plus' /></FlatButton>
    <FlatButton {...props.mode === mode.edit ? { primary: true } : {}} ><FontAwesome name='edit' /></FlatButton>
    <FlatButton {...props.mode === mode.info ? { primary: true } : {}}><FontAwesome name='info' /></FlatButton>
    <FlatButton {...props.mode === mode.remove ? { primary: true } : {}}><FontAwesome name='remove' /></FlatButton>
    <FlatButton {...props.showSearchBar ? { primary: true } : {}}><FontAwesome name='search' /></FlatButton>
    <ActionBar />
  </div>
)

export default Semesters
