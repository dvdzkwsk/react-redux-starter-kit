/* eslint-disable */
import Immutable from 'immutable';
import createReducer from 'utils/create-reducer';
import {
  TODO_CREATE,
  TODO_DESTROY,
  TODO_TOGGLE_COMPLETE
} from 'constants/todo';

const createTodoItem = (copy) => Immutable.Map({
  copy     : copy,
  complete : false
});

const initialState = Immutable.List([
  'Read the docs',
  'Build something cool'
].map(createTodoItem));
/* eslint-enable */

export default createReducer({
  [TODO_CREATE]  : (state, { copy }) => state.push(createTodoItem(copy)),
  [TODO_DESTROY] : (state, { copy }) => {
    return state.filter(todo => todo.get('copy') !== copy);
  },
  [TODO_TOGGLE_COMPLETE] : (state, { copy }) => {
    return state.map(todo => {
      return todo.get('copy') === copy
        ? todo.set('complete', !todo.get('complete'))
        : todo;
    });
  }
});
