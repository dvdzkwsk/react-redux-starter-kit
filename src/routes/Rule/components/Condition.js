import React from 'react'
import Select from 'react-select'
import DimensionSelectorContainer from '../containers/DimensionSelectorContainer'
import ConditionValueContainer from '../containers/ConditionValueContainer'

const booleanOptions = [
  {
    label: 'is',
    value: true
  },
  {
    label: 'is not',
    value: false
  }
]

export const Condition = ({
  id,
  ruleId,
  dimension='context.domain',
  op=true,
  value=[],
  updateConditionDimension,
  updateConditionOp,
  updateConditionValue,
  deleteCondition
}) => (
  <fieldset className='panel panel-default'>
    <div className='row'>
      <div className='col-sm-6'>
        <DimensionSelectorContainer
          dimension={dimension}
          onChange={dimension => {
            updateConditionDimension({
              id: id,
              dimension
            })
          }}
        />
      </div>
      <div className='col-sm-6'>
        <Select
          value={op}
          simpleValue
          options={booleanOptions}
          onChange={value => {
            updateConditionOp({
              id: id,
              op: value
            })
          }}
        />
      </div>
    </div>
    <div className='row'>
      <div className='col-xs-12'>
        <ConditionValueContainer
          id={id}
          onChange={value => {
            updateConditionValue({
              id: id,
              ruleId: ruleId,
              value: value
            })
          }}
      />
      </div>
    </div>
    <button
      className='btn btn-default'
      onClick={e => {
        e.preventDefault()
        deleteCondition({
          id: id,
          ruleId: ruleId
        })
      }}
    >
      <div className='glyphicon glyphicon-minus' />
      <span> Delete Condition </span>
    </button>
  </fieldset>
)

Condition.propTypes = {
  id: React.PropTypes.string.isRequired,
  ruleId: React.PropTypes.string.isRequired,
  dimension: React.PropTypes.string.isRequired,
  op: React.PropTypes.bool.isRequired,
  value: React.PropTypes.array.isRequired,
  updateConditionDimension: React.PropTypes.func.isRequired,
  updateConditionOp: React.PropTypes.func.isRequired,
  updateConditionValue: React.PropTypes.func.isRequired,
  deleteCondition: React.PropTypes.func.isRequired
}

export default Condition
