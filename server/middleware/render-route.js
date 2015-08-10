const router    = require('../../dist/server'),
      USE_CACHE = process.env.NODE_ENV === 'production';

function renderIntoTemplate (template, content) {
  return template.replace('${content}', content);
}

module.exports = function makeRenderRouteMiddleware (template) {
  return function *renderRouteMiddleware () {
    const rendered = yield router(this.request);

    this.body = renderIntoTemplate(template, rendered);
  };
};
