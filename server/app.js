import express from 'express'
import historyApiFallback from 'connect-history-api-fallback'
import config from '../config'

const app = express()
const debug = require('debug')('app:server')
const paths = config.utils_paths

app.use(historyApiFallback({
  verbose: false
}))

// Serve app with Webpack if HMR is enabled
if (config.compiler_enable_hmr) {
  const webpack = require('webpack')
  const webpackConfig = require('../build/webpack')
  const compiler = webpack(webpackConfig)

  app.use(require('./middleware/webpack-dev')({
    compiler,
    publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('./middleware/webpack-hmr')({ compiler }))
} else {
  debug(
    'Application is being run outside of development mode. This starter kit ' +
    'does not provide any production-specific server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  )
}

app.use(express.static(paths.base('static')))

export default app
