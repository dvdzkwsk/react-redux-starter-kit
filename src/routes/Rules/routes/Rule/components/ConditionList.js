import React from 'react'
import ConditionContainer from '../containers/ConditionContainer'

export const ConditionList = ({
  ruleId,
  conditions = {},
  addCondition
}) => (
  <div>
    {
      Object.keys(conditions).length
      ? Object.keys(conditions).map(key => (
        <ConditionContainer key={key} id={key} />
      ))
      : <p>A rule with no conditions will be applied in every scenario.</p>
    }
    <button
      className='btn btn-default'
      onClick={e => {
        e.preventDefault()
        addCondition(ruleId)
      }}
    >
      <div className='glyphicon glyphicon-plus' />
      <span> Add Condition</span>
    </button>
  </div>
)

ConditionList.propTypes = {
  ruleId: React.PropTypes.string.isRequired,
  conditions: React.PropTypes.object.isRequired,
  addCondition: React.PropTypes.func.isRequired
}

export default ConditionList
