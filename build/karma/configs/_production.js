const DIST_DIRNAME = require('../../../config').DIST_DIRNAME;

module.exports = function karmaProductionConfigModifier (config) {
  config.singleRun = true;
  config.reporters = ['spec', 'coverage'];
  config.coverageReporter = {
    type : 'html',
    dir  : DIST_DIRNAME + '/coverage/'
  };

  return config;
};
