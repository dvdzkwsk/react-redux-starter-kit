import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from 'apps/home/reducers'

export default combineReducers({
  counter,
  router
})
