import React  from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import routes from '../routes';
import App from 'containers/app';

export default function render (req, callback) {
  const location = new Location(req.path, req.query);

  Router.run(routes, location, function (error, initialState, transition) {
    const rendered = React.renderToString(
      <App initialState={initialState} />
    );

    callback(rendered);
  });
}
