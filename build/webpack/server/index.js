const webpack       = require('webpack'),
      makeConfig    = require('../make-config'),
      projectConfig = require('../../../config');

const config = makeConfig({
  name   : 'server',
  target : 'node',
  entry  : {
    app : [
      projectConfig.inSrc('entry-points/server')
    ]
  },
  output : {
    filename : 'index.js',
    path     : projectConfig.inDist('server'),
    libraryTarget : 'commonjs2'
  },
  preloaders : []
});

// ------------------------------------
// Server-Specific Plugins
// ------------------------------------
config.plugins.push(
  new webpack.DefinePlugin({
    '__CLIENT__' : false,
    '__SERVER__' : true
  })
);

// ------------------------------------
// Server-Specific Loaders
// ------------------------------------
config.module.loaders.push(
  {
    test : /\.scss$/,
    loaders : [
      'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]',
      'autoprefixer?browsers=last 2 version',
      'sass-loader?includePaths[]=' + projectConfig.inSrc('styles')
    ]
  }
);

module.exports = function makeServerConfig (type) {
  return require('./_' + (type || projectConfig.NODE_ENV))(config);
};
