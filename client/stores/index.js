import { compose, createStore } from 'redux';
import { devTools } from 'redux-devtools';
import rootReducer from 'reducers';

var createStoreWithMiddleware;

if (__DEBUG__) {
  createStoreWithMiddleware = compose(devTools())(createStore);
} else {
  createStoreWithMiddleware = createStore;
}

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
