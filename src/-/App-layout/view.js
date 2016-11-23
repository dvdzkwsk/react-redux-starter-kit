import React from 'react'
import Sider from '../Sider'
import './style.scss'
import Location from '../Location'
import { IndexLink } from 'react-router'

export const AppLayout = ({ children }) => (
  <div className='ant-layout-aside'>
    <aside className='ant-layout-sider'>
      <div className='ant-layout-logo'>
       <IndexLink to='/'>Logo</IndexLink> 
      </div>
      <Sider />
    </aside>
    <div className='ant-layout-main'>
      <div className='ant-layout-header' />
      <div className='ant-layout-breadcrumb' />
      <div className='ant-layout-container'>
        <Location />
        <div className='ant-layout-content'>
          <div style={{ height: 760 }}>
            {children}
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
