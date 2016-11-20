import React from 'react'
import './CoreLayout.scss'
import '../../styles/core.scss'
import QueueAnim from 'rc-queue-anim'

import Sider from '../../containers/Sider'
import Location from '../../containers/Location'

export const CoreLayout = ({ children }) => (
  <div className='ant-layout-aside'>
    <QueueAnim delay={300} className='queue-simple'>
      <aside key='a' className='ant-layout-sider'>
        <div className='ant-layout-logo' />
        <Sider />
      </aside>
      <div key='b' className='ant-layout-main'>
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
    </QueueAnim>
  </div>

)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
