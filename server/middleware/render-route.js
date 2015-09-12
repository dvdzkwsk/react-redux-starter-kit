import fs        from 'fs';
import config    from '../../config';
import React     from 'react';
import ReactDOM  from 'react-dom/server';

const paths = config.get('utils_paths');

const { Root, route, configureStore } = require(paths.dist('server'));

// ------------------------------------
// Rendering Setup
// ------------------------------------
// TODO: there's a cleaner way to do this. The reason we're using the
// compiled .html file is so that we don't have to worry about query strings
// on generated assets, and we maintain a consistent index.html file between
// client-side development w/ webpack-dev-server and server rendering.
const template = fs.readFileSync(paths.dist('client/index.html'), 'utf-8')
  .replace(
    '<div id="root"></div>',
    [
      '<div id="root">${content}</div>',
      '<script>window.__INITIAL_STATE__ = ${initialState}</script>'
    ].join('')
  );

// TODO: should probably use a tagged template
function renderIntoTemplate (template, content, initialState) {
  return template
    .replace('${content}', content)
    .replace('${initialState}', JSON.stringify(initialState));
}

// ------------------------------------
// Rendering Middleware
// ------------------------------------
export default function makeRenderRouteMiddleware (middleware) {
  return function *renderRouteMiddleware (next) {
    let initialState;

    if (typeof middleware === 'function') {
      initialState = yield middleware.call(this);
    }

    try {
      const props = yield route(this.request.url);

      this.body = renderIntoTemplate(
        template,
        ReactDOM.renderToString(
          <Root routingContext={props} store={configureStore(initialState)} />
        ),
        initialState
      );
    } catch (e) {
      console.log(e);
      yield next;
    }
  };
}
