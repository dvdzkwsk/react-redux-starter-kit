import runRouter from '../../dist/server';

function renderIntoTemplate (template, content) {
  return template.replace('${content}', content);
}

export default function makeRenderRouteMiddleware (template) {
  return function *renderRouteMiddleware (next) {
    try {
      const rendered = yield runRouter(this.request);

      this.body = renderIntoTemplate(template, rendered);
    } catch (e) {
      console.log(e);
      yield next;
    }
  };
};
