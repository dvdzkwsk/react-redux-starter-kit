export default function (config) {
  config.devtool = 'eval';
  config.entry.app.push(
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server'
  );

  return config;
};
