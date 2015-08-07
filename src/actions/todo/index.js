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

export function toggleCompleteTodo (copy) {
  return {
    type    : TODO_TOGGLE_COMPLETE,
    payload : { copy }
  };
}

export function destroyTodo (copy) {
  return {
    type    : TODO_DESTROY,
    payload : { copy }
  };
}
