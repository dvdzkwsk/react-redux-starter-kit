import React from 'react'
import ConditionListContainer from '../containers/ConditionListContainer'
import ActionListContainer from '../containers/ActionListContainer'
import ReviewContainer from '../containers/ReviewContainer'
import StatusMessageContainer from '../containers/StatusMessageContainer'
import './Rule.scss'

// TODO consider using redux forms
// TODO change what is displayed based on location hash (#conditions, #actions, etc.)
export const Rule = ({
  id,
  updateRule,
  description = '',
  updateDescription,
  params
}) => (
  <div>
    <StatusMessageContainer />
    <form>
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
          value={description}
          onChange={e => {
            updateDescription({
              id,
              description: e.target.value
            })
          }}
        />
      </div>
      <ul className='nav nav-tabs' role='tablist'>
        <li role='presentation' className='active'>
          <a href='#conditions' role='tab' data-toggle='tab'>Conditions</a>
        </li>
        <li role='presentation'>
          <a href='#actions' role='tab' data-toggle='tab'>Actions</a>
        </li>
        <li role='presentation'>
          <a href='#review' role='tab' data-toggle='tab'>Review</a>
        </li>
      </ul>
      <br />
      <div className='tab-content'>
        <div role='tabpanel' id='conditions' className='form-group tab-pane active fade in'>
          <ConditionListContainer ruleId={id} />
        </div>
        <div role='tabpanel' id='actions' className='form-group tab-pane fade'>
          <ActionListContainer ruleId={id} />
        </div>
        <div role='tabpanel' id='review' className='form-group tab-pane fade'>
          <ReviewContainer />
          <button
            type='submit'
            className={`btn btn-primary `}
            disabled={!(id === 'new' || id === params.id)}
            onClick={e => {
              e.preventDefault()
              updateRule()
            }
          }>
            <div className='glyphicon glyphicon-floppy-disk' />
            <span> Submit</span>
          </button>
        </div>
      </div>
    </form>
  </div>
)

Rule.propTypes = {
  id: React.PropTypes.string.isRequired,
  updateRule: React.PropTypes.func.isRequired,
  description: React.PropTypes.string.isRequired,
  updateDescription : React.PropTypes.func.isRequired,
  params: React.PropTypes.object.isRequired
}

export default Rule
