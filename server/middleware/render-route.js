const runRouter = require('../../dist/server'),
      USE_CACHE = process.env.NODE_ENV === 'production';

function renderIntoTemplate (template, content) {
  return template.replace('${content}', content);
}

module.exports = function makeRenderRouteMiddleware (template) {
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
