import { combineReducers } from 'redux';
import counter from './counter';
import { routerStateReducer } from 'redux-router';

export default combineReducers({
  counter,
  router: routerStateReducer
});
