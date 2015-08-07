import {
  TODO_CREATE,
  TODO_DESTROY,
  TODO_TOGGLE_COMPLETE
} from 'constants/todo';

export function createTodo (copy) {
  return {
    type    : TODO_CREATE,
    payload : { copy }
  };
}

export function toggleCompleteTodo (id) {
  return {
    type    : TODO_TOGGLE_COMPLETE,
    payload : { id }
  };
}

export function destroyTodo (id) {
  return {
    type    : TODO_DESTROY,
    payload : { id }
  };
}
