const debug = require('debug')('kit:webpack:development');
debug('Create configuration.');

const webpackConfig = require('./_base');

// ------------------------------------
// Define Overrides
// ------------------------------------
webpackConfig.devtool = 'source-map';

export default webpackConfig;
