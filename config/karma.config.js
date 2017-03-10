const argv = require('yargs').argv
const project = require('./project.config')
const webpackConfig = require('./webpack.config')
const debug = require('debug')('app:config:karma')

debug('Creating configuration.')
const karmaConfig = {
  basePath : '../', // project root in relation to bin/karma.js
  files    : [
    {
      pattern  : `./${project.dir_test}/test-bundler.js`,
      watched  : false,
      served   : true,
      included : true
    }
  ],
  singleRun     : !argv.watch,
  frameworks    : ['mocha'],
  reporters     : ['mocha'],
  preprocessors : {
    [`${project.dir_test}/test-bundler.js`] : ['webpack']
  },
  browsers : ['PhantomJS'],
  webpack  : {
    devtool : 'cheap-module-source-map',
    entry: './tests/test-bundler.js',
    resolve : Object.assign({}, webpackConfig.resolve, {
      alias : Object.assign({}, webpackConfig.resolve.alias, {
        sinon : 'sinon/pkg/sinon.js'
      })
    }),
    plugins : webpackConfig.plugins,
    module  : {
      noParse : [
        /\/sinon\.js/
      ],
      rules : webpackConfig.module.rules.concat([
        {
          test   : /sinon(\\|\/)pkg(\\|\/)sinon\.js/,

          loader : 'imports-loader'
          // options: {
          //   define: false,
          //   require: false
          // }
        }
      ])
    },
    // Enzyme fix, see:
    // https://github.com/airbnb/enzyme/issues/47
    externals : Object.assign({}, webpackConfig.externals, {
      'react/addons'                   : true,
      'react/lib/ExecutionEnvironment' : true,
      'react/lib/ReactContext'         : 'window'
    }),
    sassLoader : webpackConfig.sassLoader
  },
  webpackMiddleware : {
    noInfo : true
  },
  coverageReporter : {
    reporters : project.coverage_reporters
  }
}

if (project.globals.__COVERAGE__) {
  karmaConfig.reporters.push('coverage')
  karmaConfig.webpack.module.rules.push({
    test    : /\.(js|jsx)$/,
    include : new RegExp(project.dir_client),
    exclude : /node_modules/,
    loader  : 'babel-loader',
    query   : Object.assign({}, project.compiler_babel, {
      plugins : (project.compiler_babel.plugins || []).concat('istanbul')
    })
  })
}

module.exports = (cfg) => cfg.set(karmaConfig)
