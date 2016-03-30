## Components

This is where we keep stateless presentational components that will be used throughout
our application.

### Super Simple Example

```js
import React from 'react'

const today = new Date();
const year = today.getFullYear();

export default const FullYear = () => <span>{year}</span>
```

### Counter Example (using FlowType)

- component is using FlowType annotations to type check props
- we can import

```js
/* @flow */
import React, { PropTypes } from 'react'
import classes from './Counter.scss'

// FlowType annotations
type Props = {
  counter: number,
  doubleAsync: Function,
  increment: Function
};

// We also recommend using react PropTypes
const counterPropTypes = {
  counter: PropTypes.number.isRequired,
  doubleAsync: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
}

export const Counter = (props: Props) => (
  <div>
    <h2 className={classes.counterContainer}>
      'Counter: '
      <span className={classes['counter--green']}>
        {props.counter}
      </span>
    </h2>
    <button className='btn btn-default' onClick={props.increment}>
      'Increment'
    </button>
    {' '}
    <button className='btn btn-default' onClick={props.doubleAsync}>
      'Double (Async)'
    </button>
  </div>
)

Counter.propTypes = counterPropTypes

export default Counter
```
