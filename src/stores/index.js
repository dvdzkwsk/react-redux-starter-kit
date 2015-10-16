import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer  from '../reducers';
import { devTools } from 'redux-devtools';
import thunk        from 'redux-thunk';

export default function configureStore (initialState) {
  let createStoreWithMiddleware;

  const middleware = applyMiddleware(thunk);

  if (__DEBUG__) {
    createStoreWithMiddleware = compose(middleware, devTools());
  } else {
    createStoreWithMiddleware = compose(middleware);
  }

  const store = createStoreWithMiddleware(createStore)(
    rootReducer, initialState
  );
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
