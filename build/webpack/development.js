import webpackConfig from './_base';

const debug = require('debug')('kit:webpack:development');
debug('Create configuration.');

// ------------------------------------
// Define Overrides
// ------------------------------------

// Webpack's new recommended devtool for super fast
// source mapping (will be the default in next version)
// https://webpack.github.io/docs/configuration.html#devtool
debug('Override devtool with cheap-module-eval-source-map.')
webpackConfig.devtool = 'cheap-module-eval-source-map';

export default webpackConfig;
