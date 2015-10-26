import { combineReducers }    from 'redux';
import { routerStateReducer } from 'redux-router';
import counter                from './counter';

export default combineReducers({
  counter,
  router: routerStateReducer
});
