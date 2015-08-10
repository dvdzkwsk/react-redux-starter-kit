import React  from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import routes from '../routes';
import App from 'containers/app';

export default function render (request) {
  return function renderThunk (callback) {
    const location = new Location(request.path, request.query);

    Router.run(routes, location, function (error, initialState, transition) {
      try {
        const rendered = React.renderToString(
          <App initialState={initialState} />
        );

        callback(null, rendered);
      } catch (e) {
        callback(e);
      }
    });
  };
}
