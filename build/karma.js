import { argv }      from 'yargs';
import config        from '../config';
import webpackConfig from '../webpack.config';

const KARMA_ENTRY_FILE  = 'karma.entry.js';

function makeDefaultConfig () {
  return {
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './' + KARMA_ENTRY_FILE
    ],
    singleRun  : !argv.watch,
    frameworks : ['mocha', 'sinon-chai'],
    preprocessors : {
      [KARMA_ENTRY_FILE] : ['webpack'],
      [`${config.get('dir_src')}/**/*.js`] : ['webpack'],
      [`${config.get('dir_test')}/**/*.js`] : ['webpack']
    },
    reporters : ['spec'],
    browsers : ['PhantomJS'],
    webpack : {
      devtool : 'inline-source-map',
      resolve : webpackConfig.resolve,
      plugins : webpackConfig.plugins
        .filter(plugin => !plugin.__KARMA_IGNORE__),
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
      require('karma-sinon-chai'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ]
  };
}

export default (karmaConfig) => karmaConfig.set(makeDefaultConfig());
