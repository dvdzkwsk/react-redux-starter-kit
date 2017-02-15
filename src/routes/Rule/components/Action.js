import React from 'react'
import TypeSelector from './TypeSelector'
import ActionValueContainer from '../containers/ActionValueContainer'

export const Action = (props) => (
  <fieldset>
    <div className='row'>
      <div className='col-sm-6'>
        <TypeSelector type={props.type} onChange={_type => {
          props.updateActionType({_type, id: props.id})
        }}/>
      </div>
      <div className='form-group col-sm-3'>
        <label className='control-label' htmlFor='rank-input'>Rank</label>
        <input
          id='rank-input'
          className='form-control'
          type='number'
          defaultValue={props.rank}
          min={-1}
          max={100}
          onChange={e => {
            props.updateActionRank({
              id: props.id,
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
          defaultValue={props.yield}
          min={-1}
          max={100}
          onChange={e => {
            props.updateActionYield({
              id: props.id,
              _yield: Number(e.target.value)
            })
          }}
        />
      </div>
    </div>
    <div className='form-group'>
      <label className='control-label'>Value</label>
      <ActionValueContainer id={props.id}/>
    </div>
    <button
      className='btn btn-default'
      onClick={e => {
        e.preventDefault()
        props.deleteAction({
          id: props.id,
          ruleId: props.ruleId
        })
      }}
    >
      <div className='glyphicon glyphicon-minus'></div>
      <span> Delete Action </span>
    </button>
  </fieldset>
)

export default Action
