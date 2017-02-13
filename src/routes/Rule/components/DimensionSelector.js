import React from 'react'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

export const DimensionSelector = (props) => (
  <Select
    simpleValue
    value={props.dimension}
    options={Object.keys(props.dimensions).map(label => ({
      value: label,
      label
    }))}
    onChange={props.onChange}
  />
)

export default DimensionSelector
