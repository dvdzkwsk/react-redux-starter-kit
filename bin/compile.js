const fs = require('fs-extra')
const debug = require('debug')('app:bin:compile')
const webpackCompiler = require('../build/webpack-compiler')
const webpackConfig = require('../build/webpack.config')
const config = require('../config')

const paths = config.utils_paths

const compile = () => {
  debug('Starting compiler.')
  return Promise.resolve()
    .then(() => webpackCompiler(webpackConfig))
    .then(stats => {
      if (stats.warnings.length && config.compiler_fail_on_warning) {
        throw new Error('Config set to fail on warning, exiting with status code "1".')
      }
      debug('Copying static assets to dist folder.')
      fs.copySync(paths.client('static'), paths.dist())
    })
    .then(() => {
      debug('Compilation completed successfully.')
    })
    .catch((err) => {
      debug('Compiler encountered an error.', err)
      process.exit(1)
    })
}

compile()
