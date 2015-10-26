import webpack       from 'webpack';
import config        from '../../config';
import webpackConfig from './development';

webpackConfig.entry.app.push(
  `webpack-dev-server/client?${config.get('webpack_public_path')}`,
  `webpack/hot/dev-server`
);

webpackConfig.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
);

// Remove ESLint loader if configuration file prohibits it in live dev.
if (!config.get('lint_in_live_dev')) {
  webpackConfig.module.preLoaders = webpackConfig.module.preLoaders
    .filter(pl => !/eslint/.test(pl.loader));
}

// We need to apply the react-transform HMR plugin to the Babel configuration,
// but _only_ when HMR is enabled. Putting this in the default development
// configuration will break other tasks such as test:unit because Webpack
// HMR is not enabled there, and these transforms require it.
webpackConfig.module.loaders = webpackConfig.module.loaders.map(loader => {
  if (/js(?!on)/.test(loader.test)) {
    loader.query.env.development.extra['react-transform'].transforms.push({
      transform : 'react-transform-hmr',
      imports   : ['react'],
      locals    : ['module']
    });
  }

  return loader;
});

export default webpackConfig;
