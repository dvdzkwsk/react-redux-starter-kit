import React from 'react'
import ConditionContainer from '../containers/ConditionContainer'
import ActionContainer from '../containers/ActionContainer'

// TODO change what is displayed based on location hash (#conditions, #actions, etc.)
export const Rule = (props) => (
  <form style={{ textAlign: 'left' }}>
    <div className='form-group'>
      <label
        className='control-label'
        htmlFor='description-input'>
        Description
      </label>
      <input
        id='description-input'
        className='form-control'
        type='text'
        value={props.description}
        onChange={e => {
          props.updateDescription({
            id: props.id,
            description: e.target.value
          })
        }}
      />
    </div>
    <ul className='nav nav-tabs'>
      <li role='presentation' className='active'><a href='#conditions'>Conditions</a></li>
      <li role='presentation'><a href='#actions'>Actions</a></li>
      <li role='presentation'><a href='#review'>Review</a></li>
    </ul>
    <fieldset className='form-group'>
      {props.conditions.map(id => (
        <ConditionContainer
          key={id}
          id={id}
        />
      ))}
      <button
        className='btn btn-default'
        onClick={e => {
          e.preventDefault()
          props.addCondition(props.id)
        }}
      >
        <div className='glyphicon glyphicon-plus'></div>
        <span> Add Condition </span>
      </button>
    </fieldset>
    <fieldset className='form-group'>
      {props.actions.map(id => (
        <ActionContainer
          key={id}
          id={id}
        />
      ))}
      <button
        className='btn btn-default'
        onClick={e => {
          e.preventDefault()
          //props.addCondition(props.id)
        }}
      >
        <div className='glyphicon glyphicon-plus'></div>
        <span> Add Action </span>
      </button>
    </fieldset>
  </form>
)

Rule.propTypes = {
  // rules     : React.PropTypes.array.isRequired,
  updateDescription : React.PropTypes.func.isRequired,
  addCondition : React.PropTypes.func.isRequired
}

export default Rule
