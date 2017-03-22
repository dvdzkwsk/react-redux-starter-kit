import React from 'react'
import { Link } from 'react-router'
import './AddressFieldSet.scss'

export class AddressFieldSet extends React.Component {
  componentDidMount () {
    getProvinces()
  }

  render () {
    return (
      <fieldset className='form-group address'>
        <legend>Where do you need this service?</legend>
        <div className='form'>
          <div className='address_1'>
            <input type='text' placeholder='Address Line 1' />
          </div>
          <div className='address_2'>
            <input type='text' placeholder='Address Line 2 (Optional)' />
          </div>
          <div className='province'>
            <select></select>
          </div>
          <div className='district'>
            <select></select>
          </div>
          <div className='zip_code'>
            <input type='text' placeholder='Zip Code' size='5'/>
          </div>
        </div>
      </fieldset>
    )
  }
}

export default AddressFieldSet
