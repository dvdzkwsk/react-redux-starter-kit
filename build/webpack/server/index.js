import webpack from 'webpack';
import makeConfig from '../make-config';
import { inSrc, inDist, NODE_ENV } from '../../../config';

const config = makeConfig({
  name   : 'server',
  target : 'node',
  entry  : {
    app : [
      inSrc('entry-points/server')
    ]
  },
  output : {
    filename : 'index.js',
    path     : inDist('server'),
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
      `sass-loader?includePaths[]=${inSrc('styles')}`
    ]
  }
);

export default (configName) => {
  return require(`./_${configName || NODE_ENV}`)(config);
};
