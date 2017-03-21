import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import makeRootReducer from './reducers';
import { updateLocation } from './location';

export default (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================

    // 为什么要用thunk http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
    const middleware = [thunk];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];

    let composeEnhancers = compose;

    if (__DEV__) {
        const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
        if (typeof composeWithDevToolsExtension === 'function') {
            composeEnhancers = composeWithDevToolsExtension;
        }
    }

    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
    store.asyncReducers = {};

    // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
    store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default;
            store.replaceReducer(reducers(store.asyncReducers));
        });
    }

    return store;
};
