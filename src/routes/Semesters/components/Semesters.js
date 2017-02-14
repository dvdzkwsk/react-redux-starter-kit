import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import SearchBar from '../containers/SearchBarContainer'
import ActionBar from '../containers/SemestersActionBarContainer'

export const Semesters = (props) => (
  <div>
    { props.fetched ? '' : props.loadSemesters() }
    { props.showSearchBar ? (<SearchBar />) : '' }
    <ListGroup>
      { props.filteredSemesters.map(semester => (
        <ListGroupItem key={semester.id} onClick={() => props.semesterClick(semester.id)}>
          { semester.name }
        </ListGroupItem>
      )) }
    </ListGroup>
    <ActionBar />
  </div>
)

export default Semesters
