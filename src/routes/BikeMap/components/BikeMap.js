import React from 'react'
import PropTypes from 'prop-types'
import InputLocation from './InputLocation'
import SimpleMapExample from './testMap'

const BikeMap = ({start, end, bikeRoutes, handleInputChange, getBikeRoutes }) => (
  <div style={{ margin: '0 auto' }} >
    <div>
    <h2>Bike Map Routes:</h2>
    <InputLocation start={start} end={end} getBikeRoutes={getBikeRoutes} handleInputChange={handleInputChange}/>
    </div>

    <SimpleMapExample/>
  </div>
);

export default BikeMap;