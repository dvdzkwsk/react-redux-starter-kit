import React from 'react'
import Select from 'react-select'
import CountryCodes from 'data/countrycodes'
import 'react-select/dist/react-select.css'

// TODO clean up and separate this code
const componentMap = new Map([
	['boolean', BooleanValue],
	['integer', StringValue],
	['string', StringValue]
])

const predefinedData = new Map([
	['owner.country', CountryCodes],
	['reader.country', CountryCodes]
])

let SelectComponent = Select.Creatable

export const ConditionValue = (props) => {
  const options = getPredefinedOptions(props)
  const areOptionsPredefined = options.length > 0
  const values = getValidatedValues(props)

  if (areOptionsPredefined) {
    SelectComponent = Select
  }

  const newProps = {
    ...props,
    options,
    values
  }

  return componentMap.get(props.type)(newProps)
}

ConditionValue.propTypes = {
  value: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired
}

function getPredefinedOptions ({ label, format }) {
  const options = []
  const predefinedOptions = predefinedData.get(label) || []

  options.push(...predefinedOptions)

  const optionsFromFormat = getOptionsFromFormat(format)

  options.push(...optionsFromFormat)

  return options
}

function getOptionsFromFormat (format) {
  const predefinedValues = /([a-z]+\|)+[a-z]+/g

  if (predefinedValues.test(format)) {
    const matchedValues = format.match(predefinedValues)[0].split('|')

    return matchedValues.map(v => ({
      value: v,
      label: v
    }))
  }

  return []
}

function getValidatedValues ({ value, type, format }) {
  let validationPattern

  switch (type) {
    case 'integer':
      validationPattern = /^\d+$/
      return value.filter(v => validationPattern.test(v))
    case 'string':
      validationPattern = new RegExp(format)
      return value.filter(v => validationPattern.test(v))
    default:
      return value
  }
}

function BooleanValue (props) {
  const booleanOptions = [
    {
    	label: 'true',
    	value: true
    },
    {
    	label: 'false',
    	value: false
    }
  ]

  return (
    <SelectComponent
      simpleValue
      value={props.values[0]}
      options={booleanOptions}
      onChange={value => props.onChange([value])}
  	/>
  )
}

function IntegerValue (props) {
  return (
    <SelectComponent />
  )
}

function valuesToOptions (value) {
  return value.map(label => ({
    value: label,
    label
  }))
}

function StringValue (props) {
  const options = props.options.concat(valuesToOptions(props.values))

  return (
    <SelectComponent
      simpleValue
      multi
      value={props.values}
      options={options}
      onChange={value => props.onChange(value.split(','))}
    />
  )
}

export default ConditionValue
