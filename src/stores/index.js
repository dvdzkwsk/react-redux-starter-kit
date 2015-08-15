import { compose, createStore, combineReducers } from 'redux';
import { devTools } from 'redux-devtools';
import * as reducers from 'reducers';
import { routerStateReducer } from 'redux-react-router';

var buildStore;

if (__DEBUG__) {
  buildStore = compose(devTools(), createStore);
} else {
  buildStore = createStore;
}

export default buildStore(combineReducers({
  router: routerStateReducer,
  ...reducers
}));
