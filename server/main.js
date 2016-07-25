import Koa from 'koa'
import convert from 'koa-convert'
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import historyApiFallback from 'koa-connect-history-api-fallback'
import serve from 'koa-static'
import proxy from 'koa-proxy'
import _debug from 'debug'
import config from '../config'
import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHMRMiddleware from './middleware/webpack-hmr'
import universalMiddleware from './middleware/universal'

const debug = _debug('app:server')
const paths = config.utils_paths

export default async () => {
  const app = new Koa()
  var hash;

  // Enable koa-proxy if it has been enabled in the config.
  if (config.proxy && config.proxy.enabled) {
    app.use(convert(proxy(config.proxy.options)))
  }

  // ------------------------------------
  // Apply Webpack HMR Middleware
  // ------------------------------------
  if (config.env === 'development') {
    const compiler = webpack(webpackConfig)

    // Enable webpack-dev and webpack-hot middleware
    const { publicPath } = webpackConfig.output

    // Catch the hash of the build in order to use it in the universal middleware
    config.universal && compiler.plugin("done", stats => {
      hash = stats.hash
    })

    app.use(webpackDevMiddleware(compiler, publicPath))
    app.use(webpackHMRMiddleware(compiler))

    // Serve static assets from ~/src/static since Webpack is unaware of
    // these files. This middleware doesn't need to be enabled outside
    // of development since this directory will be copied into ~/dist
    // when the application is compiled.
    app.use(serve(paths.src('static')))
  } else {
    debug(
      'Server is being run outside of live development mode, meaning it will ' +
      'only serve the compiled application bundle in ~/dist. Generally you ' +
      'do not need an application server for this and can instead use a web ' +
      'server such as nginx to serve your static files. See the "deployment" ' +
      'section in the README for more information on deployment strategies.'
    )

    // Serving ~/dist by default. Ideally these files should be served by
    // the web server and not the app server, but this helps to demo the
    // server in production.
    app.use(serve(paths.public()))
  }

  if (config.universal) {
    let um = await universalMiddleware()
    app.use(um.default(() => hash))
  } else {
    // This rewrites all routes requests to the root /index.html file
    // (ignoring file requests).
    app.use(convert(historyApiFallback({
      verbose: false
    })))
  }

  return Promise.resolve(app)
}
