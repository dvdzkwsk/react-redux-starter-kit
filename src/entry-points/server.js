import React  from 'react';
import Router from 'react-router';
import routes from '../routes';

export default function render (path, callback) {
  Router.run(routes, path, function (Root) {
    callback(React.renderToString(<Root />));
  });
}
