import webpack from 'webpack'
import config from '../../config'
import _debug from 'debug'

const debug = _debug('app:webpack:production')

export default (webpackConfig) => {
  debug('Create configuration.')

  if (config.compiler_source_maps) {
    debug('Source maps enabled for production.')
    webpackConfig.devtool = 'source-map'
  } else {
    debug('Source maps are disabled in production.')
  }

  debug('Inject UglifyJS plugins.')
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true
      }
    })
  )

  return webpackConfig
}
