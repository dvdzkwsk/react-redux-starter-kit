import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import fetching from './modules/fetching'

export default combineReducers({
  fetching,
  counter,
  router
})
