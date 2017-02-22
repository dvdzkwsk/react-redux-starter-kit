import React from 'react'
import Select from 'react-select'
import {
  ARRAY,
  BOOL,
  NUMBER,
  STRING,
  default as Actions
} from 'data/actions'
import 'react-select/dist/react-select.css'

const typeMap = new Map([
  [ARRAY, ArrayValue],
  [BOOL, BoolValue],
  [NUMBER, NumberValue],
  [STRING, StringValue]
])

export const ActionValue = (props) => {
  return <fieldset className='panel panel-default'>
    {
      Actions.getIn([props.type, 'value']).map((type, key) => {
        return typeMap.get(type)({
          key,
          value: props.value[key],
          onChange: props.updateActionValue,
          id: props.id
        })
      })
    }

  </fieldset>
}

ActionValue.propTypes = {
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.array.isRequired,
  id: React.PropTypes.string.isRequired,
  updateActionValue: React.PropTypes.func.isRequired
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
        multi
        options={options}
        onChange={values => {
          const value = values.map(v => v.value)

          props.onChange({
            id: props.id,
            key: props.key,
            value
          })
        }}
      />
    </div>
  )
}

ArrayValue.propTypes = {
  key: React.PropTypes.string.isRequired,
  value: React.PropTypes.array.isRequired,
  id: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
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
          props.onChange({
            id: props.id,
            key: props.key,
            value: e.target.value === 'true'
          })
        }}
        >
        <option value>true</option>
        <option value={false}>false</option>
      </select>
    </div>
  )
}

BoolValue.propTypes = ArrayValue.propTypes

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
          props.onChange({
            id: props.id,
            key: props.key,
            value: Number(e.target.value)
          })
        }}
      />
    </div>
  )
}

NumberValue.propTypes = ArrayValue.propTypes

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
          props.onChange({
            id: props.id,
            key: props.key,
            value: e.target.value
          })
        }}
      />
    </div>
  )
}

StringValue.propTypes = ArrayValue.propTypes

export default ActionValue
