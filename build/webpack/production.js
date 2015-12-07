import webpack           from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config            from '../../config';

const debug = require('debug')('kit:webpack:production');
debug('Create configuration.');

const webpackConfig = require('./_base');

// ------------------------------------
// Define Overrides
// ------------------------------------
const PROD_CONFIG = config.env_production;

if (PROD_CONFIG.source_maps) {
  debug('Source maps enabled for production.');
  webpackConfig.devtool = 'source-map';
} else {
  debug('Source maps are disabled in production.');
}

debug('Apply ExtractTextPlugin to CSS loaders.');
webpackConfig.module.loaders = webpackConfig.module.loaders.map(loader => {
  if (/css/.test(loader.test)) {
    const [first, ...rest] = loader.loaders;

    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'));
    delete loader.loaders;
  }

  return loader;
});

webpackConfig.plugins.push(
  new ExtractTextPlugin('[name].[hash].css'),
  new webpack.optimize.UglifyJsPlugin({
    compress : {
      'unused'    : true,
      'dead_code' : true
    }
  })
);

export default webpackConfig;
