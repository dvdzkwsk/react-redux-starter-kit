import React from 'react'
import { IndexLink } from 'react-router'

import { SiderContainer } from './containers'

import './style.scss'
import DuckImage from './assets/logo.jpg'


export const AppLayout = ({ children }) => (
  <div className='ant-layout-aside'>
    <aside className='ant-layout-sider'>
      <div className='ant-layout-logo'>
        <IndexLink to='/'><img 
          alt='This is a duck, because Redux!'
          className='logo'
          src={ DuckImage } /></IndexLink>
       
      </div>
      <SiderContainer global-style="default"/>
    </aside>
    <div className='ant-layout-main'>
      <div className='ant-layout-header'/>
      <div className='ant-layout-breadcrumb'/>
      <div className='ant-layout-container'>
        <div className='ant-layout-content'>
          <div style={{ height: 760 }}>
            { children }
          </div>
        </div>
      </div>
      <div className='ant-layout-footer'>
        Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
      </div>
    </div>
  </div>
)

AppLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}
