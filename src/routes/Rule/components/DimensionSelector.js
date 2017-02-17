import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export const DimensionSelector = ({
  dimension,
  dimensions,
  onChange
}) => (
  <Select
    simpleValue
    value={dimension}
    options={Object.keys(dimensions).map(label => ({
      value: label,
      label
    }))}
    onChange={onChange}
  />
)

export default DimensionSelector
