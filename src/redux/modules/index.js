import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'

export default combineReducers({
  counter,
  router: routeReducer
})
