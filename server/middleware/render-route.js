import fs     from 'fs';
import config from '../../config';

const paths = config.get('utils_paths');
const { render, route, getStoreState } = require(paths.dist('server'));

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

export default function makeRenderRouteMiddleware (middleware) {
  return function *renderRouteMiddleware (next) {
    try {
      let initialState;

      if (typeof middleware === 'function') {
        initialState = yield middleware.call(this);
      }

      const routerState = yield route(this.request);
      const rendered    = yield render(routerState, initialState);
      const storeState  = yield getStoreState();

      this.body = renderIntoTemplate(template, rendered, storeState);
    } catch (e) {
      console.log(e);
      yield next;
    }
  };
}
