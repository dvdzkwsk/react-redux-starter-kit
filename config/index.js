process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

import path     from 'path';
import { argv } from 'yargs';

const config = new Map();

// ------------------------------------
// User Configuration
// ------------------------------------
// NOTE: Due to limitations with Webpack's custom require, which is used for
// looking up all *.spec.js files, if you edit dir_src you must also edit
// the path in ~/karma.entry.js.
config.set('dir_src',  'src');
config.set('dir_dist', 'dist');

config.set('server_host',  'localhost');
config.set('server_port',  process.env.PORT || 4000);
config.set('webpack_port', 3000);

config.set('vendor_dependencies', [
  'history',
  'react',
  'react-redux',
  'react-router',
  'redux',
  'redux-devtools',
  'redux-devtools/lib/react'
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
// Webpack
// ------------------------------------
config.set('webpack_public_path',
  `http://${config.get('server_host')}:${config.get('webpack_port')}/`
);

// ------------------------------------
// Project
// ------------------------------------
config.set('path_project', path.resolve(__dirname, '../'));

// ------------------------------------
// Utilities
// ------------------------------------
const paths = (() => {
  const base    = [config.get('path_project')],
        resolve = path.resolve;

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
].reduce((acc, x) => ((acc[x] = paths.src(x)) && acc), {}));

export default config;
