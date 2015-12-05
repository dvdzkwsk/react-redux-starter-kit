/* eslint-disable */
import path     from 'path';
import { argv } from 'yargs';
import dotenv   from 'dotenv';
import chalk    from 'chalk';
import pkg      from '../package.json';

dotenv.load();
const config = new Map();

// ------------------------------------
// Project Customization
// ------------------------------------

// Should source maps be generated when the application is compiled
// for production?
config.set('production_enable_source_maps', false);

// What dependencies should be compiled separately from the core
// application code?
config.set('vendor_dependencies', [
  'history',
  'react',
  'react-redux',
  'react-router',
  'redux',
  'redux-simple-router'
]);

// ------------------------------------
// Project Structure
// ------------------------------------

// Where is the root of the project in relation to this file?
config.set('dir_base', path.resolve(__dirname, '../'));

config.set('dir_src',  'src');    // where React app source code lives
config.set('dir_dist', 'dist');   // where to deploy compiled code
config.set('dir_test', 'tests');  // where tests live

// ------------------------------------
// Server Configuration
// ------------------------------------
config.set('server_host', 'localhost');
config.set('server_port', process.env.PORT || 3000);

// ------------------------------------
// Test Configuration
// ------------------------------------
config.set('coverage_enabled', !argv.watch); // enabled if not in watch mode
config.set('coverage_reporters', [
  { type : 'text-summary' },
  { type : 'html', dir : 'coverage' }
]);

/*  *********************************************
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
************************************************/
// ------------------------------------
// Environment
// ------------------------------------
config.set('env', process.env.NODE_ENV);
config.set('globals', {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.get('env'))
  },
  'NODE_ENV'     : config.get('env'),
  '__DEV__'      : config.get('env') === 'development',
  '__PROD__'     : config.get('env') === 'production',
  '__DEBUG__'    : config.get('env') === 'development' && !argv.no_debug,
  '__DEBUG_NW__' : !!argv.nw
});

// ------------------------------------
// Verify Vendor Dependencies
// ------------------------------------
const vendor = config.get('vendor_dependencies')

const validVendor = vendor.filter(dep => {
  if (pkg.dependencies[dep]) return true;

  console.log(chalk.yellow(
    `Package "${dep}" was not found as an npm dependency in package.json; ` +
    `it won't be included in the webpack vendor bundle.\n` +
    `Consider removing it from vendor_dependencies in ~/config/index.js`
  ));
});
config.set('vendor_dependencies', vendor);

// ------------------------------------
// Utilities
// ------------------------------------
const paths = (() => {
  const base    = config.get('dir_base');
  const resolve = path.resolve;

  const base = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    base : base,
    src  : base.bind(null, config.get('dir_src')),
    dist : base.bind(null, config.get('dir_dist'))
  };
})();

config.set('utils_paths', paths);
config.set('utils_aliases', [
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
].reduce((acc, dir) => ((acc[dir] = paths.src(dir)) && acc), {}));

export default config;
/* eslint-enable */
