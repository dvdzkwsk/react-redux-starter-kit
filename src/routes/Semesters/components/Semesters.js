import React from 'react'
import { browserHistory } from 'react-router'
import { mode } from '../modules/semesters'

export const Semesters = (props) => (
  <div>
    <div className="list-group">
    { props.semesters.map(semester => (
      <button className="list-group-item" key={semester.id}>
        <span className="badge">14</span>
        { semester.name }
      </button>
    )) }
    </div>
    <button onClick={() => browserHistory.push(`semester/${mode.properties[mode.add].uriName}`)}>new</button>
  </div>
)

export default Semesters
