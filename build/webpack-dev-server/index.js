const webpack = require('webpack'),
      config  = require('../../config'),
      WebpackDevServer = require('webpack-dev-server'),
      makeCompiler = require('../webpack/client');

const server = new WebpackDevServer(webpack(makeCompiler()), {
  contentBase : config.inProject(config.SRC_DIRNAME),
  hot    : true,
  quiet  : config.QUIET_MODE,
  noInfo : config.QUIET_MODE,
  lazy   : false,
  stats  : {
    colors : true
  },
  historyApiFallback : true
});

server.listen(config.WEBPACK_PORT, 'localhost', function () {
  console.log('Webpack dev server running at localhost:' + config.WEBPACK_PORT);
});

module.exports = exports = server;
