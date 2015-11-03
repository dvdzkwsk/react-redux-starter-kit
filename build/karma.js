import { argv }      from 'yargs';
import config        from '../config';
import webpackConfig from '../webpack.config';

function makeDefaultConfig () {
  return {
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      `./${config.get('dir_test')}/**/*.spec.js`
    ],
    singleRun  : !argv.watch,
    frameworks : ['mocha', 'sinon-chai', 'chai-as-promised', 'chai'],
    preprocessors : {
      [`${config.get('dir_src')}/**/*.js`] : ['webpack'],
      [`${config.get('dir_test')}/**/*.js`] : ['webpack']
    },
    reporters : ['spec', 'coverage'],
    browsers : ['PhantomJS'],
    webpack : {
      devtool : 'inline-source-map',
      resolve : webpackConfig.resolve,
      plugins : webpackConfig.plugins
        .filter(plugin => !plugin.__KARMA_IGNORE__),
      module  : {
        loaders : webpackConfig.module.loaders,
        postLoaders : [{
          test : /\.(js|jsx)$/,
          include : /src/,
          loader  : 'istanbul-instrumenter'
        }]
      }
    },
    webpackMiddleware : {
      noInfo : true
    },
    coverageReporter : {
      type : 'html',
      dir  : config.get('dir_coverage')
    },
    plugins : [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-chai-as-promised'),
      require('karma-sinon-chai'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-spec-reporter')
    ]
  };
}

export default (karmaConfig) => karmaConfig.set(makeDefaultConfig());
