import webpack from 'webpack';
import makeConfig from '../make-config';
import { inSrc, inDist } from '../../../lib/path';
import { NODE_ENV } from '../../../lib/environment';

const config = makeConfig({
  name   : 'Server',
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
  }
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

export default require(`./_${NODE_ENV}`)(config);
