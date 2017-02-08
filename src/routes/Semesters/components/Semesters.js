import React from 'react'
import { ListGroup, ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'
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
      <Button onClick={() => { props.modeButtonClick(mode.add); props.semesterClick(null) }}>new</Button>
      <Button {...props.mode === mode.edit ? {bsStyle:'primary'} : {}} onClick={() => props.modeButtonClick(mode.edit)}>edit</Button>
      <Button {...props.mode === mode.info ? {bsStyle:'primary'} : {}} onClick={() => props.modeButtonClick(mode.info)}>info</Button>
      <Button {...props.mode === mode.remove ? {bsStyle:'primary'} : {}} onClick={() => props.modeButtonClick(mode.remove)}>remove</Button>
    </ButtonGroup>
    <Button {...props.showSearchBar ? {bsStyle:'primary'} : {}} onClick={() => props.searchButtonClick()}>search</Button>
  </div>
)

export default Semesters
