const fs     = require('fs'),
      koa    = require('koa'),
      jade   = require('koa-jade'),
      config = require('../config'),
      router = require('../dist/server'),
      React  = require('react'),
      serve  = require('koa-static');

const app = koa();

// ------------------------------------
// Response Time Header and Logging
// ------------------------------------
app.use(require('./middleware/response-time'));
app.use(require('./middleware/logger'));

// ------------------------------------
// Static File Middleware
// ------------------------------------
app.use(serve(config.inDist('client')));

// ------------------------------------
// Jade Configuration and Globals
// ------------------------------------
const clientFiles = fs.readdirSync(config.inDist('client'));

app.use(jade.middleware({
  viewPath : `${__dirname}/views`,
  debug    : config.__DEBUG__,
  pretty   : config.__DEBUG__,
  locals   : {

    // TODO: script ordering currently happens to be correct if it's in
    // reverse alphabetical order, but this really should be more secure.
    scripts : clientFiles
      .filter(function (file) {
        return /(app|vendor).*.js$/.test(file);
      }).reverse(),

    // TODO: currently only one stylesheet is generated, but this should be
    // written to be more flexible and not ignore potential cascade issues.
    styles : clientFiles
      .filter(function (file) {
        return /.css$/.test(file);
      })
  }
}));

// ------------------------------------
// View Rendering
// ------------------------------------
app.use(function *reactRenderer () {
  if (!/favicon/.test(this.request.url)) {
    router(this.request, function (rendered) {
      this.render('index', {
        rendered : rendered
      });
    }.bind(this));
  }
});

module.exports = app;
