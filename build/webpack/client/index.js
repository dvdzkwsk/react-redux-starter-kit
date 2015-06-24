import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import makeConfig from '../make-config';
import { inSrc, inDist } from '../../../lib/path';
import { NODE_ENV } from '../../../lib/environment';
import { VENDOR_DEPENDENCIES } from '../../../config';

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

config.plugins.push(
  new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js')
);

config.plugins.push(
  new HtmlWebpackPlugin({
    template : inSrc('index.html'),
    hash     : true
  })
);

export default require(`./_${NODE_ENV}`)(config);
