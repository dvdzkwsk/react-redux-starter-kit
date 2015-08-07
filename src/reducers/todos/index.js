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

export default function todos (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TODO_CREATE:
      return state.push(
        createTodoItem(payload.copy)
      );
    case TODO_DESTROY:
      return state.filter(todo =>
        todo.get('copy') !== payload.copy
      );
    case TODO_TOGGLE_COMPLETE:
      return state.map(todo =>
        todo.get('copy') === payload.copy ?
          todo.set('complete', !todo.get('complete')) : todo
      );
    default:
      return state;
  }
}
