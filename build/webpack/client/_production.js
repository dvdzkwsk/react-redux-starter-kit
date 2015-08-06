const webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeClientProductionConfig (config) {
  config.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css')
  );

  config.module.loaders = config.module.loaders.map(function (loader) {

    // Extract CSS to a file
    if (/css/.test(loader.test)) {
      loader.loader = ExtractTextPlugin.extract(
        loader.loaders[0], loader.loaders.slice(1).join('!')
      );
      delete loader.loaders;
    }

    return loader;
  });

  return config;
};
