import React from 'react'
import FontAwesome from 'react-fontawesome'
import {List, ListItem} from 'material-ui/List'
import FlatButton from 'material-ui/FlatButton';
import { mode } from '../modules/semesters'
import SearchBar from '../containers/SearchBarContainer'

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
    <FlatButton {...props.mode === mode.edit ? { primary: true } : {}} onClick={() => props.modeButtonClick(mode.edit)}><FontAwesome name='edit' /></FlatButton>
    <FlatButton {...props.mode === mode.info ? { primary: true } : {}} onClick={() => props.modeButtonClick(mode.info)}><FontAwesome name='info' /></FlatButton>
    <FlatButton {...props.mode === mode.remove ? { primary: true } : {}} onClick={() => props.modeButtonClick(mode.remove)}><FontAwesome name='remove' /></FlatButton>
    <FlatButton {...props.showSearchBar ? { primary: true } : {}} onClick={() => props.searchButtonClick()}><FontAwesome name='search' /></FlatButton>
  </div>
)

export default Semesters
