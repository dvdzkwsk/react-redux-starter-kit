import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

let listItem = [{title:'首页','active':true},{title:'地图管理'},{title:'数据中心'},{title:'帮助中心'}]

let userInfo = {userName:'kshern'}


export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header listItem={listItem} userInfo={userInfo} />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
