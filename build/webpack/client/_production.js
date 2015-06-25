import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { VENDOR_DEPENDENCIES } from '../../../config';

export default function (config) {
  config.entry.vendor = VENDOR_DEPENDENCIES;
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].[hash].js'),
    new ExtractTextPlugin('[name].[contenthash].css')
  );

  config.module.loaders = config.module.loaders.map(loader => {

    // Extract CSS to a file
    if (/\.css/.test(loader.test)) {
      loader.loader = ExtractTextPlugin.extract(
        loader.loaders[0], loader.loaders.slice(1).join('!')
      );
      delete loader.loaders;
    }

    return loader;
  });

  return config;
};
