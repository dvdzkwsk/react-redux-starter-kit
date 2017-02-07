import React from 'react'
import { browserHistory } from 'react-router'
import { mode } from '../modules/semesters'

export const Semesters = (props) => (
  <div>
    <div className='list-group'>
      { props.semesters.map(semester => (
        <button className='list-group-item' key={semester.id}
          onClick={() => props.semesterClick(semester.id)}
        >
          <span className='badge'>14</span>
          { semester.name }
        </button>
      )) }
    </div>
    <button className='btn btn-default' onClick={() => {props.modeButtonClick(mode.add); props.semesterClick(null)}}>new</button>
    <button className={props.mode === mode.edit ? 'btn btn-primary' : 'btn btn-default'} onClick={() => props.modeButtonClick(mode.edit)}>edit</button>
    <button className={props.mode === mode.info ? 'btn btn-primary' : 'btn btn-default'} onClick={() => props.modeButtonClick(mode.info)}>info</button>
    <button className={props.mode === mode.remove ? 'btn btn-primary' : 'btn btn-default'} onClick={() => props.modeButtonClick(mode.remove)}>remove</button>
  </div>
)

export default Semesters
