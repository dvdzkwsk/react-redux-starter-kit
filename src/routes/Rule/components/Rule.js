import React from 'react'
import ConditionContainer from '../containers/ConditionContainer'

// TODO change what is displayed based on location hash (#conditions, #actions, etc.)
export const Rule = (props) => (
  <form style={{ margin: '0 auto', textAlign: 'left' }}>
    <div className='input-group'>
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
    <fieldset>
      {props.conditions.map(id => (
        <ConditionContainer key={id} id={id} />
      ))}
      <button
        className='btn btn-default'
        onClick={e => {
          e.preventDefault()
          props.addCondition(props.id)
        }}
      >
        <div className='glyphicon glyphicon-plus'></div>
      </button>
    </fieldset>
    <fieldset />
  </form>
)

Rule.propTypes = {
  // rules     : React.PropTypes.array.isRequired,
  updateDescription : React.PropTypes.func.isRequired
}

export default Rule
