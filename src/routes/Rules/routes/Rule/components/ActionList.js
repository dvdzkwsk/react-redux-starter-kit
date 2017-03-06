import React from 'react'
import ActionContainer from '../containers/ActionContainer'

export const ActionList = ({
  ruleId,
  actions = {},
  addAction
}) => (
  <div>
    {
      Object.keys(actions).length
      ? Object.keys(actions).map(key => (
        <ActionContainer key={key} id={key} />
      ))
      : <p>A rule must have at least one action.</p>
    }
    <button
      className='btn btn-default'
      onClick={e => {
        e.preventDefault()
        addAction(ruleId)
      }}
    >
      <div className='glyphicon glyphicon-plus' />
      <span> Add Action</span>
    </button>
  </div>
)

ActionList.propTypes = {
  ruleId: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired,
  addAction: React.PropTypes.func.isRequired
}

export default ActionList
