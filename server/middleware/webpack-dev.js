import WebpackDevMiddleware from 'webpack-dev-middleware';
import config               from '../../config';

const paths = config.get('utils_paths');
const debug = require('debug')('kit:server:webpack-dev');

export default function ({ compiler, publicPath }) {
  debug('Enable Webpack dev middleware.');

  return WebpackDevMiddleware(compiler, {
    publicPath,
    contentBase : paths.base(config.get('dir_client')),
    hot         : true,
    quiet       : config.get('webpack_quiet'),
    noInfo      : config.get('webpack_no_info'),
    lazy        : false,
    stats       : {
      colors : true
    }
  });
}
