import React from 'react'
import Select from 'react-select'
import Actions from 'data/actions'
import { ARRAY, BOOL, NUMBER, STRING }  from 'data/actions'
import 'react-select/dist/react-select.css'

const typeMap = new Map([
  [ARRAY, ArrayValue],
  [BOOL, BoolValue],
  [NUMBER, NumberValue],
  [STRING, StringValue]
])

export const ActionValue = (props) => {
  return <fieldset>
    {
      Actions.getIn([props.type, 'value']).map((type, key) => {
        return typeMap.get(type)({ key, value: props.value[key] })
      })
    }

  </fieldset>
}

function ArrayValue (props) {
  const options = Array.isArray(props.value) ? props.value.map(v => ({
    value: v,
    label: v
  })) : []

  return (
    <div className='form-group'>
      <label className='control-label' htmlFor='{props.key}-input'>{props.key}</label>
      <Select.Creatable
        id={`${props.key}-input`}
        value={props.value}
        options={options}
        onChange={e => {

        }}
      />
    </div>
  )
}

function BoolValue (props) {
  return (
    <div className='form-group'>
      <label className='control-label' htmlFor='{props.key}-input'>{props.key}</label>
      <select
        id={`${props.key}-input`}
        className='form-control'
        defaultValue={props.value}
        onChange={e => {

        }}
        >
        <option value={true}>true</option>
        <option value={false}>false</option>
      </select>
    </div>
  )
}

function NumberValue (props) {
  return (
    <div className='form-group'>
      <label className='control-label' htmlFor='{props.key}-input'>{props.key}</label>
      <input
        id={`${props.key}-input`}
        className='form-control'
        defaultValue={props.value}
        type='number'
        onChange={e => {

        }}
      />
    </div>
  )
}

function StringValue (props) {
  return (
    <div className='form-group'>
      <label className='control-label' htmlFor='{props.key}-input'>{props.key}</label>
      <input
        id={`${props.key}-input`}
        className='form-control'
        defaultValue={props.value}
        type='text'
        onChange={e => {

        }}
      />
    </div>
  )
}

export default ActionValue
