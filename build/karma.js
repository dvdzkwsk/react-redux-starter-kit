import { argv } from 'yargs';
import config   from '../config';

const debug = require('debug')('kit:karma');
debug('Create configuration.');

const webpackConfig    = require('./webpack/' + config.env);

const karmaConfig = {
  basePath : '../', // project root in relation to bin/karma.js
  files : [
    './node_modules/phantomjs-polyfill/bind-polyfill.js',
    {
      pattern: `./${config.dir_test}/**/*.js`,
      watched: false,
      served: true,
      included: true
    }
  ],
  singleRun  : !argv.watch,
  frameworks : ['mocha', 'chai-sinon', 'chai-as-promised', 'chai'],
  preprocessors : {
    [`${config.dir_test}/**/*.js`] : ['webpack']
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
    },
    sassLoader : webpackConfig.sassLoader
  },
  webpackMiddleware : {
    noInfo : true
  },
  coverageReporter : {
    reporters : config.coverage_reporters
  }
};

if (config.coverage_enabled) {
  karmaConfig.reporters.push('coverage');
  karmaConfig.webpack.module.preLoaders = [{
    test    : /\.(js|jsx)$/,
    include : new RegExp(config.dir_client),
    loader  : 'isparta'
  }];
}

export default (cfg) => cfg.set(karmaConfig);
