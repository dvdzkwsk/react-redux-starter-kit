import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

import config from 'config'

const subtitle = config.subtitle

export const HomeView = () => (
  <div>
    <h4>Welcome!<sub>{subtitle}</sub></h4>
    <img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
  </div>
)

export default HomeView
