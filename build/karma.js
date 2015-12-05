import { argv }      from 'yargs';
import config        from '../config';
import webpackConfig from '../webpack.config';

const KARMA_ENTRY_FILE = 'karma.entry.js';

function makeDefaultConfig () {
  const karma = {
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      `./${config.get('dir_test')}/**/*.js`,
      './' + KARMA_ENTRY_FILE
    ],
    singleRun  : !argv.watch,
    frameworks : ['mocha', 'sinon-chai', 'chai-as-promised', 'chai'],
    preprocessors : {
      [KARMA_ENTRY_FILE] : ['webpack'],
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
      },
      sassLoader : webpackConfig.sassLoader
    },
    webpackMiddleware : {
      noInfo : true
    },
    coverageReporter : {
      reporters : config.get('coverage_reporters')
    }
  };

  if (config.get('coverage_enabled')) {
    karma.reporters.push('coverage');
    karma.webpack.module.preLoaders = [{
      test    : /\.(js|jsx)$/,
      include : new RegExp(config.get('dir_client')),
      loader  : 'isparta'
    }];
  }

  return karma;
}

export default (karmaConfig) => karmaConfig.set(makeDefaultConfig());
