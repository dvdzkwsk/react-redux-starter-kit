import express from 'express'
import historyApiFallback from 'connect-history-api-fallback'
import config from '../config'
import proxyMiddleware from 'http-proxy-middleware'

const app = express()
const debug = require('debug')('app:server')
const paths = config.utils_paths

if (config.proxy && config.proxy.enabled) {
  let options = config.proxy.options
  options.onError = function (err, req, res) {
    res.writeHead(500, {
      'Content-Type': 'text/plain'
    })
    res.end('Something went wrong. And we are reporting a custom error message.')
    debug('proxy error: ', err)
  }
  let apiProxy = proxyMiddleware(config.proxy.context, options)
  app.use(apiProxy)
}

app.use(historyApiFallback({
  verbose: false
}))

// Serve app with Webpack if HMR is enabled
if (config.compiler_enable_hmr) {
  const webpack = require('webpack')
  const webpackConfig = require('../build/webpack.config')
  const compiler = webpack(webpackConfig)

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(paths.client('static')))

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

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(paths.base(config.dir_dist)))
}
export default app
