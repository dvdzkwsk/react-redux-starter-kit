import { render, route, getStoreState } from '../../dist/server';

// TODO: should probably use a tagged template
function renderIntoTemplate (template, content, initialState) {
  return template
    .replace('${content}', content)
    .replace('${initialState}', JSON.stringify(initialState));
}

export default function makeRenderRouteMiddleware (template) {
  return function *renderRouteMiddleware (next) {
    try {
      const routerState = yield route(this.request);
      const rendered    = yield render(routerState, { counter : 5 });
      const storeState  = yield getStoreState();

      this.body = renderIntoTemplate(template, rendered, storeState);
    } catch (e) {
      console.log(e);
      yield next;
    }
  };
}
