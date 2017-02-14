import React from 'react'
import TypeSelector from './TypeSelector'
import ActionValueContainer from '../containers/ActionValueContainer'

export const Action = (props) => (
  <fieldset>
    <TypeSelector type={props.type} onChange={_type => {
      props.updateActionType({_type, id: props.id})
    }}/>
    <div className='form-group'>
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
    <div className='form-group'>
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
    <div className='form-group'>
      <label className='control-label' htmlFor='type-input'>Value</label>
      <pre>{JSON.stringify(props.value)}</pre>
    </div>
    <ActionValueContainer id={props.id}/>
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
      <div className='glyphicon glyphicon-minus33'></div>
      <span> Delete Action </span>
    </button>
  </fieldset>
)

export default Action
