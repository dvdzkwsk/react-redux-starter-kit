import WebpackHotMiddleware from 'webpack-hot-middleware'

const debug = require('debug')('server:webpack-hmr')

export default function ({ compiler }) {
  debug('Enable Webpack Hot Module Replacement (HMR).')

  return WebpackHotMiddleware(compiler)
}
