import { Breadcrumb, Icon } from 'antd'
import React, { Component } from 'react'

export default class Location extends Component {
  constructor (props) {
    super(props)
    this.state = {
      separator: '/'
    }
  }

  render () {
    return (
      <Breadcrumb separator={this.state.separator}>
        <Breadcrumb.Item href=''>
          <Icon type='home' />
        </Breadcrumb.Item>
        <Breadcrumb.Item href=''>
          <Icon type='user' />
          <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
                    Application
         </Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}
