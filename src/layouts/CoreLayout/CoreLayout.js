import React from 'react'
import Header from '../../containers/HeaderContainer'
import Error from '../../containers/ErrorContainer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container-fluid'>
    <Error />
    <Header />
    <div className='core-layout__viewport container'>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
