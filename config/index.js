import path     from 'path';
import { argv } from 'yargs';

require('dotenv').load();
const debug = require('debug')('kit:config');
debug('Create configuration.');

const config = {
  env : process.env.NODE_ENV,

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base  : path.resolve(__dirname, '../'),
  dir_client : 'src',
  dir_dist   : 'dist',
  dir_server : 'server',
  dir_test   : 'tests',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host : 'localhost',
  server_port : process.env.PORT || 3000,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_quiet  : false,
  compiler_vendor : [
    'history',
    'react',
    'react-redux',
    'react-router',
    'redux',
    'redux-simple-router'
  ],

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  coverage_enabled   : !!argv.coverage,
  coverage_reporters : [
    { type : 'text-summary' },
    { type : 'html', dir : 'coverage' }
  ],

  // ----------------------------------
  // Environment-Specific Configuration
  // ----------------------------------
  env_production : {
    fail_on_warning : false,
    source_maps     : false
  }
};

/************************************************
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
************************************************/

// ------------------------------------
// Environment
// ------------------------------------
config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production',
  '__DEBUG__'    : config.env === 'development' && !argv.no_debug,
  '__DEBUG_NW__' : !!argv.nw
};

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json');

config.compiler_vendor = config.compiler_vendor
  .filter(dep => {
    if (pkg.dependencies[dep]) return true;

    debug(
      `Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.\n` +
      `Consider removing it from vendor_dependencies in ~/config/index.js`
    );
  });

// ------------------------------------
// Utilities
// ------------------------------------
config.utils_paths = (() => {
  const resolve  = path.resolve;

  const base = (...args) =>
    resolve.apply(resolve, [config.path_base, ...args]);

  return {
    base   : base,
    client : base.bind(null, config.dir_client),
    dist   : base.bind(null, config.dir_dist)
  };
})();

config.utils_aliases = [
  'actions',
  'components',
  'constants',
  'containers',
  'layouts',
  'reducers',
  'routes',
  'services',
  'store',
  'styles',
  'utils',
  'views'
].reduce((acc, dir) => {
  acc[dir] = config.utils_paths.client(dir);
  return acc;
}, {});

export default config;
