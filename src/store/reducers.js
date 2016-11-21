import { combineReducers } from 'redux'
import { SiderData } from '../reducers/Sider'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    SiderData
  })
}

export default makeRootReducer
