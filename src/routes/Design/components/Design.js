import React from 'react'
import PropTypes from 'prop-types'

export const Design = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Design: {props.design}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Design.propTypes = {
  design      : PropTypes.number.isRequired,
  doubleAsync : PropTypes.func.isRequired,
  increment   : PropTypes.func.isRequired
}

export default Design
