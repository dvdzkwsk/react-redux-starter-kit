import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import counter from './counter'
import generalRefer from './generalRefer'

export default combineReducers({
  generalRefer,
  counter,
  router: routeReducer
})
