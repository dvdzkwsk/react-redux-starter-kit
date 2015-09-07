require('babel/register');

const devServer = require('../build/webpack-dev-server'),
      config    = require('../config');

const port = config.get('webpack_port');
devServer.listen(port, 'localhost', function () {
  console.log('Webpack dev server running at localhost:' + port);
});
