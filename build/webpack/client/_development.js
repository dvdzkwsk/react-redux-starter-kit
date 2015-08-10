module.exports = function makeClientDevelopmentConfig (config) {
  config.devtool = 'inline-source-map';
  config.entry.app.push(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server'
  );

  config.module.loaders = config.module.loaders.map(function (loader) {
    if (/js/.test(loader.test)) {
      loader.loaders.unshift('react-hot');
    }
    return loader;
  });

  return config;
};
