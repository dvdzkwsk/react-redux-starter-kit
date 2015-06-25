import webpack from 'webpack';
import autoprefixer from 'autoprefixer-core';
import csswring from 'csswring';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import makeConfig from '../make-config';
import { inSrc, inDist } from '../../../lib/path';
import { NODE_ENV } from '../../../lib/environment';

const config = makeConfig({
  name   : 'Client',
  target : 'web',
  entry  : {
    app : [
      inSrc('entry-points/client')
    ]
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
  })
);

// ------------------------------------
// Client-Specific Loaders
// ------------------------------------
config.module.loaders.push(
  {
    test : /\.css$/,
    loaders : ['style', 'css', 'postcss']
  }
)
config.postcss = () => [autoprefixer, csswring]

export default require(`./_${NODE_ENV}`)(config);
