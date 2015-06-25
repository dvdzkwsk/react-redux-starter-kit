const fs    = require('fs'),
      env   = require('../lib/environment'),
      koa   = require('koa'),
      jade  = require('koa-jade'),
      path  = require('../lib/path'),
      serve = require('koa-static');

const app  = koa();

// ------------------------------------
// Response Time Header and Logging
// ------------------------------------
app.use(require('./middleware/response-time'));
app.use(require('./middleware/logger'));

// ------------------------------------
// Static File Middleware
// ------------------------------------
app.use(serve(path.inDist('client')));

// ------------------------------------
// Jade Configuration and Globals
// ------------------------------------
const clientFiles = fs.readdirSync(path.inDist('client'));

app.use(jade.middleware({
  viewPath : `${__dirname}/views`,
  debug    : env.__DEBUG__,
  pretty   : env.__DEBUG__,
  locals   : {

    // TODO: script ordering currently happens to be correct if it's in
    // reverse alphabetical order, but this really should be more secure.
    scripts : clientFiles
      .filter(function (file) {
        return /(app|vendor).*.js$/.test(file);
      }).reverse(),

    // TODO: currently only one stylesheet is generated, but this should be
    // more written to be more flexible and not ignore potential cascade issues.
    styles : clientFiles
      .filter(function (file) {
        return /.css$/.test(file);
      })
  }
}));

// ------------------------------------
// View Rendering
// ------------------------------------
app.use(require('./middleware/render'));

module.exports = app;
