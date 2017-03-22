import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'

export class AddressFieldSet extends React.Component {

  render () {
    return (
      <fieldset className='form-group address'>
        <legend>Where do you need this service?</legend>
        <div className='form'>
          <div className='address_1'>
            <input type='text' placeholder='Address line1' />
          </div>
          <div className='address_2'>
            <input type='text' placeholder='Address line2' />
          </div>
          <div className='province'>
            <select></select>
          </div>
          <div className='district'>
            <select></select>
          </div>
          <div className='zip_code'>
            <input type='text' placeholder='Zip Code' />
          </div>
        </div>
      </fieldset>
    )
  }
}

export default AddressFieldSet
