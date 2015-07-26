import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import makeConfig from '../make-config';
import { inSrc, inDist, NODE_ENV, VENDOR_DEPENDENCIES } from '../../../config';

const config = makeConfig({
  name   : 'Client',
  target : 'web',
  entry  : {
    app : [
      inSrc('entry-points/client')
    ],
    vendor : VENDOR_DEPENDENCIES
  },
  output : {
    filename : '[name].[hash].js',
    path     : inDist('client')
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
    template : inSrc('index.html'),
    hash     : true
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
      `sass-loader?includePaths[]=${inSrc('styles')}`
    ]
  }
);

export default (configName) => {
  return require(`./_${configName || NODE_ENV}`)(config);
};
