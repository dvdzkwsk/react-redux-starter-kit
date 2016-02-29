import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import counter from './modules/counter';
import things from './modules/thing';
import { default as isAuthenticated } from './modules/auth';

export default combineReducers({
  isAuthenticated,
  things,
  counter,
  router
});
