const React = require('react'),
      env   = require('../../lib/environment'),
      App   = React.createFactory(require('../../dist/server'));

// ------------------------------------
// Render React Application
// ------------------------------------
// Here is where you can perform any logic needed to render your react
// application on the server. By default, it will just render the root
// application component.
module.exports = function *renderMiddleware () {
  this.render('index', {
    rendered : React.renderToString(App({}))
  }, env.__DEBUG__);
};
