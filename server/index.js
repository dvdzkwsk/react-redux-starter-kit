const fs       = require('fs'),
      env      = require('../lib/environment'),
      koa      = require('koa'),
      jade     = require('koa-jade'),
      serve    = require('koa-static'),
      React    = require('react'),
      logger   = require('./middleware/logger'),
      defaults = require('../config'),
      response = require('./middleware/response-time'),

const app = koa();

// Logging
app.use(responseTime());
app.use(logger());

// Static Files
app.use(serve(`${__dirname}/../dist/client`));

// Locate vendor and app core scripts
// TODO: ordering only works because correct ordering happens to be
// reverse-alphabetical... figure out a more solid solution.
const scripts = fs.readdirSync(`${__dirname}/../dist/client`)
  .filter(function (file) {
    return /(app|vendor).*.js$/.test(file)
  })
  .reverse();

// Jade
app.use(jade.middleware({
  viewPath : `${__dirname}/views`,
  debug    : env.__DEBUG__,
  pretty   : env.__DEBUG__,
  locals   : {
    scripts : scripts
  }
}));

// Render Application (currently just defaults to base route)
const AppFactory = React.createFactory(require('../dist/server'));
app.use(function *() {
  this.render('index', {
    rendered : React.renderToString(AppFactory({}))
  }, __DEBUG__);
});

module.exports = app;
