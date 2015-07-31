process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const resolve = require('path').resolve,
      yargs   = require('yargs').argv,
      _slice  = [].slice;

const SRC_DIRNAME  = 'src',
      DIST_DIRNAME = 'dist',
      PROJECT_PATH = resolve(__dirname, '../');

function inProject () {
  return resolve.apply(resolve, [PROJECT_PATH].concat(_slice.apply(arguments)));
}

module.exports = exports = {

  // environment
  NODE_ENV  : process.env.NODE_ENV,
  __DEBUG__ : !!yargs.debug,
  __DEV__   : process.env.NODE_ENV === 'development',
  __PROD__  : process.env.NODE_ENV === 'production',

  // path helpers
  SRC_DIRNAME  : SRC_DIRNAME,
  DIST_DIRNAME : DIST_DIRNAME,
  PROJECT_PATH : PROJECT_PATH,
  inProject : inProject,
  inSrc     : inProject.bind(undefined, SRC_DIRNAME),
  inDist    : inProject.bind(undefined, DIST_DIRNAME),

  // build system
  // these will be bundled separately from the core app
  VENDOR_DEPENDENCIES : [
    'immutable',
    'react',
    'react-redux',
    'react-router',
    'redux'
  ],

  // koa server
  SERVER_PORT : process.env.PORT || 4000
};
