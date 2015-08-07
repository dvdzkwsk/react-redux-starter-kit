/* eslint-disable */
import Immutable from 'immutable';
import {
  TODO_CREATE,
  TODO_DESTROY,
  TODO_TOGGLE_COMPLETE
} from 'constants/todo';

const uid = (seed => () => seed++)(0);
function createTodoItem (copy) {
  return Immutable.Map({
    id       : uid(),
    copy     : copy,
    complete : false
  });
}

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
        todo.get('id') !== payload.id
      );
    case TODO_TOGGLE_COMPLETE:
      return state.map(todo =>
        todo.get('id') === payload.id ?
          todo.set('complete', !todo.get('complete')) : todo
      );
    default:
      return state;
  }
}
