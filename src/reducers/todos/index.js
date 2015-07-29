/* eslint-disable */
import Immutable from 'immutable';
import {
  TODO_CREATE,
  TODO_DESTROY,
  TODO_TOGGLE_COMPLETE
} from 'constants/todo';

function createTodoItem (copy, complete = false) {
  return Immutable.Map({ copy, complete });
}

const initialState = Immutable.List([
  { complete : true,  copy : 'Install this boilerplate' },
  { complete : true,  copy : 'Check out the dev server' },
  { complete : false, copy : 'Get started on your project!' }
].map(({ copy, complete }) => createTodoItem(copy, complete)));
/* eslint-enable */

export default function todos (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case TODO_CREATE:

      break;
    case TODO_DESTROY:
      break;
    case TODO_TOGGLE_COMPLETE:
      break;
    default:
      return state;
  }
}
