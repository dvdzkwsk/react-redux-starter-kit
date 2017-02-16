import React from 'react'
import DimensionSelectorContainer from '../containers/DimensionSelectorContainer'
import ConditionContainer from '../containers/ConditionContainer'

export const ConditionList = ({ ruleId, conditions, addCondition }) => (
  <div>Conditions
    {
      Object.keys(conditions).map(key => {
        return (<ConditionContainer key={key} id={key} />)
      })
    }
    <button
      className='btn btn-default'
      onClick={e => {
        addCondition(ruleId)
      }}
    >
      <div className='glyphicon glyphicon-plus' />
      <span> Add Condition</span>
    </button>
  </div>
)

export default ConditionList
