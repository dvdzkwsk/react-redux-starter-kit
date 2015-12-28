/* eslint key-spacing:0 */
import webpack from 'webpack'
import config from '../../config'
import _debug from 'debug'

const debug = _debug('app:webpack:development')

export default (webpackConfig) => {
  debug('Create configuration.')

  debug('Enable devtool: "source-maps".')
  webpackConfig.devtool = 'source-map'

  // ------------------------------------
  // Enable HMR if Configured
  // ------------------------------------
  if (config.compiler_enable_hmr) {
    debug('Enable Hot Module Replacement (HMR).')

    webpackConfig.entry.app.push(
      'webpack-hot-middleware/client?path=/__webpack_hmr'
    )

    debug('Override devtool with "cheap-module-eval-source-map".')
    webpackConfig.devtool = 'cheap-module-eval-source-map'

    webpackConfig.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    )

    webpackConfig.eslint.emitWarning = true

    // We need to apply the react-transform HMR plugin to the Babel configuration,
    // but _only_ when HMR is enabled. Putting this in the default development
    // configuration will break other tasks such as test:unit because Webpack
    // HMR is not enabled there, and these transforms require it.
    webpackConfig.module.loaders = webpackConfig.module.loaders.map(loader => {
      if (/babel/.test(loader.loader)) {
        debug('Apply react-transform-hmr to babel development transforms')

        // Check if this fork has implemented their own development environment
        // transforms in _base and log a warning so that any unexpected
        // behavior is documented.
        if (
          loader.query.env &&
          loader.query.env.development &&
          loader.query.env.development.plugins
        ) {
          debug([
            'It looks like you\'ve added development-specific transforms to',
            'babel-loader via the "env" property. This configuration is',
            'modified in "`~/build/webpack-environments/development" in',
            'order to apply redbox-react and react-transform-hmr, so you',
            'may have to adjust that logic to account for your added',
            'transforms.'
          ].join(' '))
        } else {

          // this path didn't exist, so create all non-existent objects.
          loader.query.env = loader.query.env || {}
          loader.query.env.development = loader.query.env.development || {}
        }

        // Yeah... the new Babel plugin configuration is _really_ ugly. :/
        // They're essentially tuples, with [pluginName, pluginConfig], so
        // we push our new tuple into the collection of existing transforms.
        const plugins = loader.query.env.development.plugins || []
        loader.query.env.development.plugins = [...plugins, [
          'react-transform', {
            transforms: [
              {
                transform: 'react-transform-catch-errors',
                imports: ['react', 'redbox-react']
              }, {
                transform: 'react-transform-hmr',
                imports: ['react'],
                locals: ['module']
              }
            ]
          }
        ]]
      }

      return loader
    })
  }

  return webpackConfig
}
