/* eslint key-spacing:0 */
import webpack from 'webpack'
import config from '../../config'
import _debug from 'debug'

const debug = _debug('app:webpack:development')

export default (webpackConfig) => {
  debug('Create configuration.')

  debug('Override devtool with cheap-module-eval-source-map.')
  webpackConfig.devtool = 'cheap-module-eval-source-map'

  // ------------------------------------
  // Enable HMR if Configured
  // ------------------------------------
  if (config.compiler_enable_hmr) {
    debug('Enable Hot Module Replacement (HMR).')

    webpackConfig.entry.app.push(
      'webpack-hot-middleware/client?path=/__webpack_hmr'
    )

    webpackConfig.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    )

    webpackConfig.eslint.emitWarning = true

    // We need to apply the react-transform HMR plugin to the Babel configuration,
    // but _only_ when HMR is enabled. Putting this in the default development
    // configuration will break other tasks such as test:unit because Webpack
    // HMR is not enabled there, and these transforms require it.
    let appliedHmr = false
    webpackConfig.module.loaders = webpackConfig.module.loaders.map(loader => {
      if (loader.loader === 'babel') {
        debug('Apply react-transform-hmr to babel development transforms')

        const reactTransformHmr = {
          transform : 'react-transform-hmr',
          imports   : ['react'],
          locals    : ['module']
        }

        loader.query.env.development.plugins =
          loader.query.env.development.plugins.map(plugin => {
            let [name, options, ...rest] = plugin
            if (name !== 'react-transform') {
              return plugin;
            }

            appliedHmr = true
            options = {
              ...options,
              transforms: [
                ...options.transforms,
                reactTransformHmr
              ]
            }

            return [ name, options, ...rest ]
          })
      }

      return loader
    })

    if (!appliedHmr) {
      debug('Babel plugin react-transform-hmr could not be applied')
    }
  }

  return webpackConfig
}
