import WebpackHotMiddleware from 'koa-webpack-hot-middleware'
import _debug from 'debug'

const debug = _debug('app:server:webpack-hmr')

export default function (compiler) {
  debug('Enable Webpack Hot Module Replacement (HMR).')

  return WebpackHotMiddleware(compiler)
}
