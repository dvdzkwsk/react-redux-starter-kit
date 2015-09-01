import React    from 'react';
import ReactDOM from 'react-dom/server';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import routes from '../routes';
import App from 'containers/app';

export default function render (request) {
  return function renderThunk (callback) {
    const location = new Location(request.path, request.query);

    try {
      Router.run(routes, location, function (error, initialState, transition) {
        if (!initialState) {
          throw new Error(
            `Could not render ${request.path}: no initial state returned.`
          );
        }

        const rendered = ReactDOM.renderToString(
          <App initialState={initialState} />
        );
        callback(null, rendered);
      });
    } catch (e) {
      callback(e);
    }
  };
}
