import React          from 'react';
import ReactDOM       from 'react-dom/server';
import Router         from 'react-router';
import Location       from 'react-router/lib/Location';
import routes         from '../routes';
import Root           from 'containers/Root';
import configureStore from 'stores';

let _store;

export function getStoreState () {
  return new Promise((resolve) => resolve(_store.getState()));
}

export function render (initialRouterState, initialStoreState) {
  return new Promise((resolve, reject) => {
    try {
      _store = configureStore(initialStoreState);

      const rendered = ReactDOM.renderToString(
        <Root initialRouterState={initialRouterState} store={_store} />
      );

      resolve(rendered);
    } catch (e) {
      reject(e);
    }
  });
}

export function route (request) {
  return new Promise((resolve, reject) => {
    const location = new Location(request.path, request.query);

    Router.run(routes, location, (err, initialState) => {
      if (err) {
        reject(err);
      } else if (!initialState) {
        reject('No initial router state received from React Router.');
      } else {
        resolve(initialState);
      }
    });
  });
}
