import React from 'react'

import { Input } from 'react-bootstrap'

export default class GeneralReferForm extends React.Component {
  // static propTypes = {
  //   store: React.PropTypes.object.isRequired
  // }

  render () {
    return (
    <div>
      <form className='form-horizontal'>
        <Input type='text' label='Resume *' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
        <Input type='text' label='First Name' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
        <Input type='text' label='Last Name' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
        <Input type='select' label='Which derpartment are they most suited to? *'
          labelClassName='col-xs-3' wrapperClassName='col-xs-9'>
          <option value=''>All Departments</option>
          <option value='Eng'>Eng</option>
          <option value='Engineering, QA'>Engineering, QA</option>
          <option value='HR'>HR</option>
          <option value='Marketing'>Marketing</option>
          <option value='Sales'>Sales</option>
          <option value='Technology'>Technology</option>
        </Input>
        <Input type='textarea' label='Textarea' labelClassName='col-xs-3' wrapperClassName='col-xs-9' />
        <Input type='checkbox' label='Checkbox' wrapperClassName='col-xs-offset-2 col-xs-9' help='Offset is applied to wrapper.' />
      </form>
    </div>
    )
  }
}
