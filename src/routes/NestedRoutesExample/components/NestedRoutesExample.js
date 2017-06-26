import React from 'react'

const NestedRoutesExample = ({ children }) => (
  <div className='nested-routes-example'>
    <h1>Route with Nested subroutes....Fractal!</h1>
    <div className='page-layout'>
      {children}
    </div>
  </div>
)

export default NestedRoutesExample
