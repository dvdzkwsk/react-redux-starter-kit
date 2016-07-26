import Webpack from 'webpack'
import config from '../../config'
import webpackConfig from '../../build/webpack.config.server'
import _debug from 'debug'

const paths = config.utils_paths
const debug = _debug('app:server:universal')
const {__DEV__} = config.globals
const output = paths.dist(config.universal.output)

export default async function () {
  debug('Enable universal middleware.')

  if (__DEV__) {
    try {
      debug('Compile server.')
      await compileServer()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  return Promise.resolve(require(output))
}

function compileServer () {
  return new Promise((resolve, reject) => {
    let compiler = Webpack(webpackConfig)

    compiler.plugin('done', stats => {
      debug('Hash: ' + stats.hash)
      resolve(true)
    })

    compiler.run(function (err, stats) {
      if (err) {
        reject(err)
      }
    })
  })
}
