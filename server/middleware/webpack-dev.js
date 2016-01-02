import WebpackDevMiddleware from 'webpack-dev-middleware'
import applyExpressMiddleware from './apply-express-middleware'
import _debug from 'debug'
import config from '../../config'

const paths = config.utils_paths
const debug = _debug('app:server:webpack-dev')

export default function (compiler, publicPath) {
  debug('Enable webpack dev middleware.')

  /* eslint key-spacing:0 */
  const middleware = WebpackDevMiddleware(compiler, {
    publicPath,
    contentBase : paths.base(config.dir_client),
    hot         : true,
    quiet       : config.compiler_quiet,
    noInfo      : config.compiler_quiet,
    lazy        : false,
    stats       : config.compiler_stats
  })

  return function* (next) {
    let ctx = this
    let req = this.req

    let runNext = yield applyExpressMiddleware(middleware, req, {
      end: (content) => ctx.body = content,
      setHeader: function () {
        ctx.set.apply(ctx, arguments)
      }
    })

    if (runNext) {
      yield *next
    }
  }
}
