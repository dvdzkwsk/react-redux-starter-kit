import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import counter from './modules/counter'
import fetching from './modules/fetching'

export default combineReducers({
  fetching,
  counter,
  router
})
