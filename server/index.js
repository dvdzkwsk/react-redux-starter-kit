const fs     = require('fs'),
      koa    = require('koa'),
      serve  = require('koa-static'),
      config = require('../config');

const app = koa();

// ------------------------------------
// Response Time Header and Logging
// ------------------------------------
app.use(require('./middleware/response-time'));
app.use(require('./middleware/logger'));

// ------------------------------------
// Static File Middleware
// ------------------------------------
app.use(serve(config.inDist('client'), {
  index : '__IGNORE_INDEX.HTML__'
}));

// ------------------------------------
// View Rendering
// ------------------------------------
const template = fs.readFileSync(config.inDist('client/index.html'), 'utf-8')
  .replace('<div id="mount"></div>', '<div id="mount">${content}</div>');

app.use(require('./middleware/render-route')(template));

module.exports = app;
