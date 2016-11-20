import React from 'react'
import './CoreLayout2.scss'
import '../../styles/core.scss'
import 'antd/dist/antd.min.css'
import Sider from '../../containers/Sider'
import Location from '../../containers/Location'

export const CoreLayout2 = ({ children }) => (
  <div className='ant-layout-aside'>
    <aside className='ant-layout-sider'>
      <div className='ant-layout-logo' />
      <Sider />
    </aside>
    <div className='ant-layout-main'>
      <div className='ant-layout-header' />
      <div className='ant-layout-breadcrumb'>
        <Location />
      </div>
      <div className='ant-layout-container'>
        <div className='ant-layout-content'>
          <div style={{ height: 590 }}>
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

CoreLayout2.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout2
