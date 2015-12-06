import rootReducer from '../reducers';
import thunk       from 'redux-thunk';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

export default function configureStore (initialState) {
  const createStoreWithMiddleware = compose(applyMiddleware(thunk));

  return createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  );
}
