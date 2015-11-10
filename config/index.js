import path     from 'path';
import { argv } from 'yargs';
import dotenv   from 'dotenv';
import chalk    from 'chalk';
import pkg      from '../package.json';

dotenv.load();
const config = new Map();

// ------------------------------------
// User Configuration
// ------------------------------------
config.set('dir_src',  'src');
config.set('dir_dist', 'dist');
config.set('dir_test', 'tests');

config.set('coverage_enabled', !argv.watch);
config.set('coverage_reporters', [
  { type : 'text-summary' },
  { type : 'html', dir : 'coverage' }
]);

config.set('webpack_host',  'localhost');
config.set('webpack_port',  process.env.PORT || 3000); // eslint-disable-line

// Define what dependencies we'd like to treat as vendor dependencies,
// but only include the ones that actually exist in package.json. This
// makes it easier to remove dependencies without breaking the
// vendor bundle.
config.set('vendor_dependencies', [
  'history',
  'react',
  'react-redux',
  'react-router',
  'redux',
  'redux-router'
].filter(d => {
  if (pkg.dependencies[d]) return true;

  console.log(chalk.yellow(
    `Package "${d}" was not found as an npm dependency and won't be ` +
    `included in the vendor bundle.\n` +
    `Consider removing it from vendor_dependencies in ~/config/index.js`
  ));
}));

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
// Webpack
// ------------------------------------
config.set('webpack_public_path',
  `http://${config.get('webpack_host')}:${config.get('webpack_port')}/`
);

// ------------------------------------
// Project
// ------------------------------------
config.set('path_project', path.resolve(__dirname, '../'));

// ------------------------------------
// Utilities
// ------------------------------------
const paths = (() => {
  const base    = [config.get('path_project')];
  const resolve = path.resolve;

  const project = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    project : project,
    src     : project.bind(null, config.get('dir_src')),
    dist    : project.bind(null, config.get('dir_dist'))
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
  'styles',
  'utils',
  'views'
].reduce((acc, dir) => ((acc[dir] = paths.src(dir)) && acc), {}));

export default config;
