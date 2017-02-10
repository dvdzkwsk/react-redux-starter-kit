import React from 'react'
import { Link } from 'react-router'

// TODO change what is displayed based on location hash (#conditions, #actions, etc.)
export const Rule = (props) => (
  <form style={{ margin: '0 auto', textAlign: 'left'}}>
    <input
      type="text"
      value={props.description}
      onChange={e => {
        props.updateDescription(e.target.value)
      }}
    />
    <fieldset>
      {props.conditions.map(c => (
        <pre>{JSON.stringify(c)}</pre>
      ))}
    </fieldset>
    <fieldset>
      {props.actions.map(a => (
        <pre>{JSON.stringify(a)}</pre>
      ))}
    </fieldset>
  </form>
)

Rule.propTypes = {
  //rules     : React.PropTypes.array.isRequired,
  updateDescription : React.PropTypes.func.isRequired
}

export default Rule
