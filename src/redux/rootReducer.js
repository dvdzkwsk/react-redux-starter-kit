import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import things from './modules/thing'

export default combineReducers({
  things,
  counter,
  router
})
