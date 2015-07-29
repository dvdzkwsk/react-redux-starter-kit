import Immutable from 'immutable';
import {
  TODO_CREATE,
  TODO_DESTROY,
  TODO_TOGGLE_COMPLETE
} from 'constants/todo';

const initialState = Immutable.Iterable.Indexed(); // eslint-disable-line

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
