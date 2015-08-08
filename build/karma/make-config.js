const projectConfig     = require('../../config'),
      makeWebpackConfig = require('../webpack/make-config'),
      KARMA_ENTRY_FILE  = 'karma.entry.js';

const WEBPACK_CONFIG = makeWebpackConfig(
  require('../webpack/client')('development')
);

function makeDefaultConfig () {
  const preprocessors = {};

  preprocessors[KARMA_ENTRY_FILE] = ['webpack'];
  preprocessors[projectConfig.SRC_DIRNAME + '/**/*.js'] = ['webpack'];

  return {
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './' + KARMA_ENTRY_FILE
    ],
    frameworks : ['chai', 'mocha'],
    preprocessors : preprocessors,
    reporters : ['spec'],
    browsers : ['PhantomJS'],
    webpack : {
      devtool : 'inline-source-map',
      resolve : WEBPACK_CONFIG.resolve,
      plugins : WEBPACK_CONFIG.plugins
        .filter(function (plugin) {
          return !plugin.__KARMA_IGNORE__;
        }),
      module  : {
        loaders : WEBPACK_CONFIG.module.loaders
      }
    },
    webpackMiddleware : {
      noInfo : true
    },
    plugins : [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ]
  };
}

module.exports = function (karmaConfig) {
  return karmaConfig.set(
    require('./configs/_' + projectConfig.NODE_ENV)(makeDefaultConfig())
  );
};
