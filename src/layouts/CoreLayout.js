import React from 'react'
import 'styles/core.scss'

const PropTypes = {
  children: React.PropTypes.element
}

const CoreLayout = ({ children }) => {
  return (
    <div className='page-container'>
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

CoreLayout.propTypes = PropTypes

export default CoreLayout
