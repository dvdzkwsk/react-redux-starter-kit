import webpack from 'webpack'
import _debug from 'debug'
import config from '../config'

const debug = _debug('app:build:webpack-compiler')
const DEFAULT_STATS_FORMAT = config.compiler_stats

export default function webpackCompiler (webpackConfig, statsFormat = DEFAULT_STATS_FORMAT) {
  return new Promise((resolve, reject) => {
    const compiler = webpack(webpackConfig)

    compiler.run((err, stats) => {
      const jsonStats = stats.toJson()

      debug('Webpack compile completed.')
      debug(stats.toString(statsFormat))

      if (err) {
        debug('Webpack compiler encountered a fatal error.', err)
        return reject([err])
      } else if (jsonStats.errors.length > 0) {
        debug('Webpack compiler encountered errors.')
        debug(jsonStats.errors.join('\n'))
        return reject(new Error(jsonStats.errors))
      } else if (jsonStats.warnings.length > 0) {
        debug('Webpack compiler encountered warnings.')
        debug(jsonStats.warnings.join('\n'))
      } else {
        debug('No errors or warnings encountered.')
      }
      resolve(jsonStats.warnings)
    })
  })
}

