/* eslint-disable */
import Immutable from 'immutable';
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

const reducers = {
  [TODO_CREATE]: (state, { copy }) => state.push(createTodoItem(copy)),
  [TODO_DESTROY] : (state, { copy }) => {
    return state.filter(todo => todo.get('copy') !== copy);
  },
  [TODO_TOGGLE_COMPLETE]: (state, { copy }) => {
    return state.map(todo => {
      return todo.get('copy') === copy
        ? todo.set('complete', !todo.get('complete'))
        : todo;
    });
  }
};

export default function todos (state = initialState, action) {
  const { type, payload } = action;

  const reducer = reducers[type];

  if(!reducer) return state;
  return reducer(state, payload);
}
