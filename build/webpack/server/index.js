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

export default require(`./_${NODE_ENV}`)(config);
