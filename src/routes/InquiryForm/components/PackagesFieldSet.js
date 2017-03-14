import React from 'react'
import Moment from 'moment'
import { Link } from 'react-router'
import { isEmpty } from 'lodash'

export const PackagesFieldSet = (props) => {
  if (props.packages.isEmpty()) {
    return null
  } else {
    return (
      <fieldset className='form-group package'>
        <legend>Packages</legend>
        <div className="form">
          {
            props.packages.map(function (pkg, index) {
              return (
                <span key={index} className="radio">
                  <label>
                    <input type='radio' name="package_id" value={pkg.get('id')}/>
                    {pkg.get('name')} - ฿{pkg.get('price_satangs') / 100}
                  </label>
                </span>
              )
            })
          }
        </div>
      </fieldset>
    )
  }
}

export default PackagesFieldSet
