import { compose, createStore, combineReducers } from 'redux';
import { devTools } from 'redux-devtools';
import * as reducers from 'reducers';

var buildStore;

if (__DEBUG__) {
  buildStore = compose(devTools())(createStore);
} else {
  buildStore = createStore;
}

export default buildStore(combineReducers(reducers));
