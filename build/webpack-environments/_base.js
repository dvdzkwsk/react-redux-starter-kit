import webpack from 'webpack'
import cssnano from 'cssnano'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from '../../config'
import _debug from 'debug'

const paths = config.utils_paths
const debug = _debug('app:webpack:_base')
debug('Create configuration.')

const CSS_LOADER = !config.compiler_css_modules
  ? 'css?sourceMap'
  : [
    'css?modules',
    'sourceMap',
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&')

const webpackConfig = {
  name: 'client',
  target: 'web',
  entry: {
    app: [
      paths.base(config.dir_client) + '/main.js'
    ],
    vendor: config.compiler_vendor
  },
  output: {
    filename: `[name].[${config.compiler_hash_type}].js`,
    path: paths.base(config.dir_dist),
    publicPath: config.compiler_public_path
  },
  plugins: [
    new webpack.DefinePlugin(config.globals),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template: paths.client('index.html'),
      hash: false,
      favicon: paths.client('static/favicon.ico'),
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new webpack.ProvidePlugin(config.compiler_globals)
  ],
  resolve: {
    root: paths.base(config.dir_client),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',

        // NOTE: live development transforms (HMR, redbox-react) are
        // configured in ~/build/webpack-environments/development.js
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          CSS_LOADER,
          'postcss',
          'sass'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          CSS_LOADER,
          'postcss'
        ]
      },
      /* eslint-disable */
      { test: /\.woff(\?.*)?$/,  loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/,   loader: 'file?prefix=fonts/&name=[path][name].[ext]' },
      { test: /\.svg(\?.*)?$/,   loader: 'url?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml' },
      { test: /\.(png|jpg)$/,    loader: 'url?limit=8192' }
      /* eslint-enable */
    ]
  },
  sassLoader: {
    includePaths: paths.client('styles')
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      safe: true,
      discardComments: {
        removeAll: true
      }
    })
  ],
  eslint: {
    configFile: paths.base('.eslintrc')
  }
}

// when we don't know the public path (we know it only when HMR is enabled) we
// need to use the extractTextPlugin to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!config.compiler_enable_hmr) {
  debug('Apply ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.loaders.filter(loader =>
    loader.loaders && loader.loaders.find(name => /css/.test(name.split('?')[0]))
  ).forEach(loader => {
    const [first, ...rest] = loader.loaders
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
    delete loader.loaders
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('[name].[contenthash].css', {
      allChunks: true
    })
  )
}

// NOTE: this is a temporary workaround. I don't know how to get Karma
// to include the vendor bundle that webpack creates, so to get around that
// we remove the bundle splitting when webpack is used with Karma.
const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor']
})
commonChunkPlugin.__KARMA_IGNORE__ = true

webpackConfig.plugins.push(commonChunkPlugin)

export default webpackConfig
