import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
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

  debug('Apply ExtractTextPlugin to CSS loaders.')
  let appliedExtractCSS = false
  webpackConfig.module.loaders = webpackConfig.module.loaders.map(loader => {
    if (!loader.loaders) {
      return loader
    }

    let hasCSSLoader = false
    loader.loaders.forEach(styleLoader => {
      const [loaderName, ...params] = styleLoader.split('?')
      if (loaderName === 'css-loader') {
        hasCSSLoader = true
      }
    })

    if (!hasCSSLoader) {
      return loader
    }

    appliedExtractCSS = true

    const [first, ...rest] = loader.loaders
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
    delete loader.loaders

    return loader
  })

  if (!appliedExtractCSS) {
    debug('Plugin ExtractTextPlugin could not be applied to CSS loaders.')
  }

  debug('Inject ExtractText and UglifyJS plugins.')
  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true
      }
    })
  )

  return webpackConfig
}
