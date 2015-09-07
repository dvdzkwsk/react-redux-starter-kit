import config from '../config';
import webpackConfig from './webpack/client';

const globals = config.get('globals');
const KARMA_ENTRY_FILE  = 'karma.entry.js';

function makeDefaultConfig () {
  const preprocessors = {};

  preprocessors[KARMA_ENTRY_FILE] = ['webpack'];
  preprocessors[config.get('dir_src') + '/**/*.js'] = ['webpack'];

  return {
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './' + KARMA_ENTRY_FILE
    ],
    singleRun  : globals.__PROD__,
    frameworks : ['chai', 'mocha'],
    preprocessors : preprocessors,
    reporters : ['spec'],
    browsers : ['PhantomJS'],
    webpack : {
      devtool : 'inline-source-map',
      resolve : webpackConfig.resolve,
      plugins : webpackConfig.plugins
        .filter(p => !p.__KARMA_IGNORE__),
      module  : {
        loaders : webpackConfig.module.loaders
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

export default (karmaConfig) => karmaConfig.set(makeDefaultConfig());
