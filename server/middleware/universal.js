import { match } from 'react-router'
import { renderToStaticMarkup } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import Webpack from 'webpack'
import createStore from '../../src/store/createStore'
import AppContainer from '../../src/containers/AppContainer'
import config from '../../config'
import webpackConfig from '../../build/webpack.config.server'
import _debug from 'debug'

const paths = config.utils_paths
const debug = _debug('app:server:universal')
const {__DEV__, __PROD__, __TEST__} = config.globals


export default async function () {
  debug('Enable universal middleware.')

  try {
    let server = await compileServer()
    return Promise.resolve(require(server))
  } catch (error) {
    return Promise.reject(error)
  }
}

function compileServer() {
  return new Promise((resolve, reject) => {
    let compiler = Webpack(webpackConfig)

    compiler.plugin("done", stats => {
      debug('Hash: ' + stats.hash)
      resolve(webpackConfig.output.path + '/' + webpackConfig.output.filename)
    })

    compiler.run(function (err, stats) {
      if (err) {
        reject(err)
      }
    })
  })
}
