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
    path     : projectConfig.inDist('client'),
    publicPath : '/'
  }
});

// ------------------------------------
// Client-Specific Plugins
// ------------------------------------
// NOTE: this is a temporary workaround. I don't know how to get Karma
// to include the vendor bundle that webpack creates, so to get around that
// we remove the bundle splitting when webpack is used with Karma.
const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
  'vendor', '[name].[hash].js'
);
commonChunkPlugin.__KARMA_IGNORE__ = true;

config.plugins.push(
  new webpack.DefinePlugin({
    '__CLIENT__' : true,
    '__SERVER__' : false
  }),
  new HtmlWebpackPlugin({
    template : projectConfig.inSrc('index.html'),
    hash     : true,
    filename : 'index.html',
    minify   : projectConfig.__PROD__,
    inject   : 'body'
  }),
  commonChunkPlugin
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
      'sass-loader?includePaths[]=' + projectConfig.inSrc('styles')
    ]
  }
);

module.exports = function makeClientConfig (type) {
  return require('./_' + (type || projectConfig.NODE_ENV))(config);
};
