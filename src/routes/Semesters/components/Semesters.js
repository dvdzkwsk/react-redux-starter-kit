import React from 'react'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
import { mode } from '../modules/semesters'
import SearchBar from './SearchBar'

export const Semesters = (props) => (
  <div>
    { props.showSearchBar ? (<SearchBar />) : '' }
    <ListGroup>
      { props.filteredSemesters.map(semester => (
        <ListGroupItem key={semester.id} onClick={() => props.semesterClick(semester.id)}>
          <span className='badge'>14</span>
          { semester.name }
        </ListGroupItem>
      )) }
    </ListGroup>
    <ButtonGroup>
      <Button onClick={() => { props.modeButtonClick(mode.add); props.semesterClick(null) }}><FontAwesome name='plus' /></Button>
      <Button {...props.mode === mode.edit ? { bsStyle:'primary' } : {}} onClick={() => props.modeButtonClick(mode.edit)}><FontAwesome name='edit' /></Button>
      <Button {...props.mode === mode.info ? { bsStyle:'primary' } : {}} onClick={() => props.modeButtonClick(mode.info)}><FontAwesome name='info' /></Button>
      <Button {...props.mode === mode.remove ? { bsStyle:'primary' } : {}} onClick={() => props.modeButtonClick(mode.remove)}><FontAwesome name='remove' /></Button>
    </ButtonGroup>
    <Button {...props.showSearchBar ? { bsStyle:'primary' } : {}} onClick={() => props.searchButtonClick()}><FontAwesome name='search' /></Button>
  </div>
)

export default Semesters
