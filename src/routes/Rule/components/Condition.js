import React from 'react'
import DimensionSelectorContainer from '../containers/DimensionSelectorContainer'
import ConditionValueContainer from '../containers/ConditionValueContainer'

export const Condition = (props) => (
  <fieldset>
    <DimensionSelectorContainer
      dimension={props.dimension}
      onChange={dimension => {
        props.updateConditionDimension({
          id: props.id,
          dimension
        })
      }}
    />
    <select
      defaultValue={props.op}
      className='form-control'
      onChange={e => {
        props.updateConditionOp({
          id: props.id,
          op: e.target.value === 'true'
        })
      }}
      >
      <option value>is</option>
      <option value={false}>is not</option>
    </select>
    <ConditionValueContainer
      id={props.id}
      onChange={value => {
        props.updateConditionValue({
          id: props.id,
          ruleId: props.ruleId,
          value: value
        })
      }}
    />
    <button
      className='btn btn-default'
      onClick={e => {
        e.preventDefault()
        props.deleteCondition({
          id: props.id,
          ruleId: props.ruleId
        })
      }}
    >
      <div className='glyphicon glyphicon-minus33'></div>
      <span> Delete Condition </span>
    </button>
  </fieldset>
)

Condition.propTypes = {
  id: React.PropTypes.string.isRequired,
  dimension: React.PropTypes.string.isRequired,
  op: React.PropTypes.bool.isRequired,
  value: React.PropTypes.array.isRequired,
  ruleId: React.PropTypes.string.isRequired
}

export default Condition
