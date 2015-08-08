/* eslint-disable */
import { compose, createStore, combineReducers } from 'redux';
import * as reducers from 'reducers';

// TODO: better way to do conditional requires with webpack?
const { devTools } = (function () {
  return __DEBUG__ ? require('redux-devtools') : {};
})();
/* eslint-enable */

var buildStore;

if (__DEBUG__) {
  buildStore = compose(devTools(), createStore);
} else {
  buildStore = createStore;
}

export default buildStore(combineReducers(reducers));
