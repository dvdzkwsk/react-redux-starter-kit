export default function (config) {
  config.devtool = 'eval';
  config.entry.app.push(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server'
  );

  config.module.loaders = config.module.loaders.map(loader => {
    if (/js/.test(loader.test)) {
      loader.loaders = ['react-hot', ...loader.loaders];
    }
    return loader;
  });

  return config;
};
