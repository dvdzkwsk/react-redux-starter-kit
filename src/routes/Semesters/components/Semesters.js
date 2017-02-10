import React from 'react'
import {List, ListItem} from 'material-ui/List'
import SearchBar from '../containers/SearchBarContainer'
import ActionBar from '../containers/SemestersActionBarContainer'

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
    <ActionBar />
  </div>
)

export default Semesters
