import React from 'react'
import Actions from 'data/actions.js'
import Select from 'react-select'

const options = Actions.keySeq().sort().map(key => {
  return {
    value: key,
    label: key
  }
}).toJS()

export const TypeSelector = (props) => (
  <div className='form-group'>
    <label className='control-label' htmlFor='type-input'>Type</label>
    <Select
      id='type-input'
      simpleValue
      value={props.type}
      options={options}
      onChange={props.onChange}
    />
  </div>
)

export default TypeSelector
