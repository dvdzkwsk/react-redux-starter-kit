import WebpackHotMiddleware from 'webpack-hot-middleware'
import applyExpressMiddleware from './apply-express-middleware'
import _debug from 'debug'

const debug = _debug('app:server:webpack-hmr')

export default function (compiler, opts) {
  debug('Enable Webpack Hot Module Replacement (HMR).')
  
  const middleware = WebpackHotMiddleware(compiler, opts)
  return function* (next) {
    let nextStep = yield applyExpressMiddleware(middleware, this.req, this.res)

    if (nextStep && next) {
      yield* next
    }
  }
}
