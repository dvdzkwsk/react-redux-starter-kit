import React from 'react'
import ConditionContainer from '../containers/ConditionContainer'
import ActionContainer from '../containers/ActionContainer'
import ReviewContainer from '../containers/ReviewContainer'
import StatusMessageContainer from '../containers/StatusMessageContainer'
import './Rule.scss'

// TODO change what is displayed based on location hash (#conditions, #actions, etc.)
export const Rule = (props) => (
  <div>
    <StatusMessageContainer />
    <form onSubmit={e => {
      e.preventDefault()
      props.updateRule()
    }}>
      <div className='form-group'>
        <label
          className='control-label'
          htmlFor='description-input'
        >
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
      <div className='form-group'>
        <label
          className='control-label'
          htmlFor='start-input'
        >
          Start Date
        </label>
        <input
          id='start-input'
          className='form-control'
          type='date'
        />
      </div>
      <ul className='nav nav-tabs' role='tablist'>
        <li role='presentation' className='active'><a href='#conditions' role='tab' data-toggle='tab'>Conditions</a></li>
        <li role='presentation'><a href='#actions' role='tab' data-toggle='tab'>Actions</a></li>
        <li role='presentation'><a href='#review' role='tab' data-toggle='tab'>Review</a></li>
      </ul>
      <div className='tab-content'>
        <div role='tabpanel' id='conditions' className='form-group tab-pane active fade in'>
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
            <div className='glyphicon glyphicon-plus' />
            <span> Add Condition </span>
          </button>
        </div>
        <div role='tabpanel' id='actions' className='form-group tab-pane fade'>
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
              props.addAction(props.id)
            }}
          >
            <div className='glyphicon glyphicon-plus' />
            <span> Add Action </span>
          </button>
        </div>
        <div role='tabpanel' id='review' className='form-group tab-pane fade'>
          <ReviewContainer />
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
      </div>
    </form>
  </div>
)

Rule.propTypes = {
  updateDescription : React.PropTypes.func.isRequired,
  addCondition : React.PropTypes.func.isRequired,
  addAction : React.PropTypes.func.isRequired
}

export default Rule
