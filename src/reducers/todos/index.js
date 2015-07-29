import Immutable from 'immutable';
import {
  TODO_CREATE,
  TODO_DESTROY,
  TODO_TOGGLE_COMPLETE
} from 'constants/todo';

/* eslint-disable */
const initialState = Immutable.Iterable.Indexed([
  Immutable.Map({ complete : true,  copy : 'Install this boilerplate' }),
  Immutable.Map({ complete : true,  copy : 'Check out the dev server' }),
  Immutable.Map({ complete : false, copy : 'Get started on your project!' })
]);
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
