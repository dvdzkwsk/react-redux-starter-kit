const debug = require('debug')('kit:webpack:development');
debug('Create configuration.');

import webpackConfig from './_base';

// ------------------------------------
// Define Overrides
// ------------------------------------
webpackConfig.devtool = 'source-map';

export default webpackConfig;
