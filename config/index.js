const NODE_ENV = require('../lib/environment');

module.exports = exports = {

  // environment
  __DEBUG__ : NODE_ENV === 'development',

  // build system
  VENDOR_DEPENDENCIES : ['react'],
  SRC_DIRNAME  : 'app',
  DIST_DIRNAME : 'dist',

  // server
  WEBPACK_PORT : 2000,
  SERVER_PORT  : 3000
};
