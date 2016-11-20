import React from 'react'
import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/counter'

export const Counter = (props) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Counter: {props.counter}</h2>
    <button className='btn btn-default' onClick={props.increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      Double (Async)
    </button>
  </div>
)

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
}

const mapStateToProps = (state) => ({
  counter : state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
