import React from 'react'
import PropTypes from 'prop-types'
import InputLocation from './InputLocation'

export const BikeMap = ({start, end, bikeRoutes, handleInputChange, getBikeRoutes }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Bike Map Routes:</h2>
    <InputLocation start={start} end={end} getBikeRoutes={getBikeRoutes} handleInputChange={handleInputChange}/>
    {' '}
  </div>
)

BikeMap.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
  bikeRoutes: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  getBikeRoutes: PropTypes.func.isRequired
}


export default BikeMap
