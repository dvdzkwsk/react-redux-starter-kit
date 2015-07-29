import {
  TODO_CREATE,
  TODO_DESTROY,
  TODO_TOGGLE_COMPLETE
} from 'constants/todo';

export function createTodo (text) {
  return {
    type    : TODO_CREATE,
    payload : { text }
  };
}

export function toggleCompleteTodo (todo) {
  return {
    type    : TODO_TOGGLE_COMPLETE,
    payload : { todo }
  };
}

export function destroyTodo (id) {
  return {
    type    : TODO_DESTROY,
    payload : { id }
  };
}
