const webpack           = require('webpack'),
      makeConfig        = require('../make-config'),
      projectConfig     = require('../../../config'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const config = makeConfig({
  name   : 'Client',
  target : 'web',
  entry  : {
    app : [
      projectConfig.inSrc('entry-points/client')
    ],
    vendor : projectConfig.VENDOR_DEPENDENCIES
  },
  output : {
    filename : '[name].[hash].js',
    path     : projectConfig.inDist('client')
  }
});

// ------------------------------------
// Client-Specific Plugins
// ------------------------------------
config.plugins.push(
  new webpack.DefinePlugin({
    '__CLIENT__' : true,
    '__SERVER__' : false
  }),
  new HtmlWebpackPlugin({
    template : projectConfig.inSrc('index.html'),
    hash     : true,
    filename : 'template.html',
    minify   : projectConfig.__PROD__,
    inject   : 'body'
  }),
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js')
);

// ------------------------------------
// Client-Specific Loaders
// ------------------------------------
config.module.loaders.push(
  {
    test : /\.scss$/,
    loaders : [
      'style-loader',
      'css-loader',
      'autoprefixer?browsers=last 2 version',
      `sass-loader?includePaths[]=${projectConfig.inSrc('styles')}`
    ]
  }
);

module.exports = function makeClientConfig (type) {
  return require('./_' + (type || projectConfig.NODE_ENV))(config);
};
