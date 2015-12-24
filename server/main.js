import express from 'express'
import historyApiFallback from 'connect-history-api-fallback'
import config from '../config'
import httpProxy from 'http-proxy'

const app = express()
const debug = require('debug')('app:server')
const paths = config.utils_paths

let filterProxy = (x) => x // if no proxy defined - identity function

if (config.proxy && config.proxy.enabled) {
  let apiProxy = httpProxy.createProxyServer()
  app.all(config.proxy.prefix + '*', function (req, res) {
    apiProxy.web(req, res, { target: config.proxy.target })
  })
  filterProxy = function (fn) {
    return function (req, res, next) {
      if (req.path.startsWith(config.proxy.prefix)) {
        next()
      } else {
        fn(req, res, next)
      }
    }
  }
}

app.use(filterProxy(historyApiFallback({
  verbose: false
})))

// Serve app with Webpack if HMR is enabled
if (config.compiler_enable_hmr) {
  const webpack = require('webpack')
  const webpackConfig = require('../build/webpack.config')
  const compiler = webpack(webpackConfig)

  app.use(filterProxy(require('./middleware/webpack-dev')({
    compiler,
    publicPath: webpackConfig.output.publicPath
  })))
  app.use(filterProxy(require('./middleware/webpack-hmr')({ compiler })))
} else {
  debug(
    'Application is being run outside of development mode. This starter kit ' +
    'does not provide any production-specific server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(filterProxy(express.static(paths.base(config.dir_dist))))
}
export default app
