import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
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
    <button className='btn btn-default' onClick={() => { props.modeButtonClick(mode.add); props.semesterClick(null) }}>new</button>
    <button className={props.mode === mode.edit ? 'btn btn-primary' : 'btn btn-default'} onClick={() => props.modeButtonClick(mode.edit)}>edit</button>
    <button className={props.mode === mode.info ? 'btn btn-primary' : 'btn btn-default'} onClick={() => props.modeButtonClick(mode.info)}>info</button>
    <button className={props.mode === mode.remove ? 'btn btn-primary' : 'btn btn-default'} onClick={() => props.modeButtonClick(mode.remove)}>remove</button>
    <button className={props.showSearchBar ? 'btn btn-primary' : 'btn btn-default'} onClick={() => props.searchButtonClick()}>search</button>
  </div>
)

export default Semesters
