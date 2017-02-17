import React from 'react'
import TypeSelector from './TypeSelector'
import ActionValueContainer from '../containers/ActionValueContainer'

export const Action = ({
  id,
  ruleId,
  type='capping',
  updateActionType,
  rank=100,
  updateActionRank,
  updateActionYield,
  deleteAction
}) => (
  <fieldset className='panel panel-default'>
    <div className='row'>
      <div className='col-sm-6'>
        <TypeSelector type={type} onChange={_type => {
          updateActionType({ _type, id: id })
        }} />
      </div>
      <div className='form-group col-sm-3'>
        <label className='control-label' htmlFor='rank-input'>Rank</label>
        <input
          id='rank-input'
          className='form-control'
          type='number'
          defaultValue={rank}
          min={-1}
          max={100}
          onChange={e => {
            updateActionRank({
              id: id,
              rank: Number(e.target.value)
            })
          }}
        />
      </div>
      <div className='form-group col-sm-3'>
        <label className='control-label' htmlFor='yield-input'>Yield</label>
        <input
          id='yield-input'
          className='form-control'
          type='number'
          defaultValue={arguments[0].yield || 100}
          min={-1}
          max={100}
          onChange={e => {
            updateActionYield({
              id: id,
              _yield: Number(e.target.value)
            })
          }}
        />
      </div>
    </div>
    <div className='form-group'>
      <label className='control-label'>Value</label>
      <ActionValueContainer id={id} />
    </div>
    <button
      className='btn btn-default'
      onClick={e => {
        e.preventDefault()
        deleteAction({
          id: id,
          ruleId: ruleId
        })
      }}
    >
      <div className='glyphicon glyphicon-minus' />
      <span> Delete Action </span>
    </button>
  </fieldset>
)

export default Action
