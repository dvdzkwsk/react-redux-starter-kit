import { combineReducers } from 'redux'
import siderData from '../containers/Sider/reducers'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    siderData
  })
}

export default makeRootReducer
