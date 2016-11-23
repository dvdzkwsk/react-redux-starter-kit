import React from 'react'
import DuckImage from './assets/Duck.jpg'
import './style.scss'

export const HomeRoute = () => (
  <div>
    <h4>Welcome!</h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
  </div>
)

export default HomeRoute
