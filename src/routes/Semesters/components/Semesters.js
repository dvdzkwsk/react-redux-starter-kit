import React from 'react'

export const Semesters = (props) => (
  <div>
    { props.semesters.map(semester => (
      <div key={semester.id}><p>{semester.id} {semester.name}</p></div>)
    ) }
  </div>
)

export default Semesters
