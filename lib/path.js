const resolve     = require('path').resolve,
      defaults    = require('../config'),
      _slice      = [].slice,
      PROJECT_DIR = resolve(__dirname, '../');

function inProject () {
  return resolve.apply(resolve, [PROJECT_DIR].concat(_slice.apply(arguments)));
}

module.exports = exports = {
  inProject : inProject,
  inSrc     : inProject.bind(undefined, defaults.SRC_DIRNAME),
  inDist    : inProject.bind(undefined, defaults.DIST_DIRNAME)
};
