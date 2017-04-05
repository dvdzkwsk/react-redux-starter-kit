const argv = require('yargs').argv
const webpack = require('webpack')
const cssnano = require('cssnano')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const project = require('./project.config')
const debug = require('debug')('app:config:webpack')

const __DEV__ = project.globals.__DEV__
const __PROD__ = project.globals.__PROD__
const __TEST__ = project.globals.__TEST__

debug('Creating configuration.')
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: project.compiler_devtool,
  resolve: {
    modules: [
      project.paths.client(),
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  module : {}
}
// ------------------------------------
// Entry Points
// ------------------------------------
const APP_ENTRY = project.paths.client('main.js')

webpackConfig.entry = {
  app : __DEV__
    ? [APP_ENTRY].concat(`webpack-hot-middleware/client?path=${project.compiler_public_path}__webpack_hmr`)
    : [APP_ENTRY],
  vendor : project.compiler_vendors
}

// ------------------------------------
// Bundle Output
// ------------------------------------
webpackConfig.output = {
  filename   : `[name].[${project.compiler_hash_type}].js`,
  path       : project.paths.dist(),
  publicPath : project.compiler_public_path
}

// ------------------------------------
// Externals
// ------------------------------------
webpackConfig.externals = {}
webpackConfig.externals['react/lib/ExecutionEnvironment'] = true
webpackConfig.externals['react/lib/ReactContext'] = true
webpackConfig.externals['react/addons'] = true

// ------------------------------------
// Plugins
// ------------------------------------
webpackConfig.plugins = [
  new webpack.DefinePlugin(project.globals),
  new HtmlWebpackPlugin({
    template : project.paths.client('index.html'),
    hash     : false,
    favicon  : project.paths.public('favicon.ico'),
    filename : 'index.html',
    inject   : 'body',
    minify   : {
      collapseWhitespace : true
    }
  })
]

// Ensure that the compiler exits on errors during testing so that
// they do not get skipped and misreported.
if (__TEST__ && !argv.watch) {
  webpackConfig.plugins.push(function () {
    this.plugin('done', function (stats) {
      if (stats.compilation.errors.length) {
        // Pretend no assets were generated. This prevents the tests
        // from running making it clear that there were warnings.
        throw new Error(
          stats.compilation.errors.map(err => err.message || err)
        )
      }
    })
  })
}

if (__DEV__) {
  debug('Enabling plugins for live development (HMR, NoEmitOnErrors).')
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else if (__PROD__) {
  debug('Enabling plugins for production (OccurrenceOrder, Dedupe & UglifyJS).')
  webpackConfig.plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress : {
        unused    : true,
        dead_code : true
      // warnings  : false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  )
}

// Don't split bundles during testing, since we only want import one bundle
if (!__TEST__) {
  webpackConfig.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names : ['vendor']
    })
  )
}

// ------------------------------------
// Loaders
// ------------------------------------
// JavaScript / JSON
webpackConfig.module.rules = [{
  test    : /\.(js|jsx)$/,
  exclude : /node_modules/,
  loader  : 'babel-loader',
  query   : project.compiler_babel
}, {
  test   : /\.json$/,
  loader : 'json-loader'
}]

// ------------------------------------
// Style Loaders
// ------------------------------------
// We use cssnano with the postcss loader, so we tell
// css-loader not to duplicate minimization.
webpackConfig.module.rules.push({
  test : /\.scss$/,
  use  : [
    {
      loader: 'style-loader'
    },
    {
      loader      : 'css-loader',
      options     : {
        sourceMap : true,
        minimize  : true
      }
    },
    {
      loader : 'postcss-loader'
    },
    {
      loader  : 'sass-loader',
      options : {
        sourceMap : true
      }
    }
  ]
})
webpackConfig.module.rules.push({
  test : /\.css$/,
  use  : [
    {
      loader : 'style-loader'
    },
    {
      loader  : 'css-loader',
      options : {
        sourceMap : true,
        minimize  : true
      }
    },
    {
      loader : 'postcss-loader'
    }
  ]
})

webpackConfig.plugins.push(
  new webpack.LoaderOptionsPlugin({
    options : {
      postcss : [
        cssnano({
          autoprefixer : {
            add      : true,
            remove   : true,
            browsers : ['last 2 versions']
          },
          discardComments: {
            removeAll : true
          },
          discardUnused : false,
          mergeIdents   : false,
          reduceIdents  : false,
          safe          : true,
          sourcemap     : true
        })
      ],
      sassLoader : {
        includePaths : project.paths.client('styles')
      }
    }
  })
)

// File loaders
/* eslint-disable */
webpackConfig.module.rules.push(
  {
    test    : /\.woff(\?.*)?$/,
    loader  : 'url-loader',
    options : {
      prefix : 'fonts/',
      name     : '[path][name].[ext]',
      limit    : '10000',
      mimetype : 'application/font-woff'
    }
  },
  {
    test    : /\.woff2(\?.*)?$/,
    loader  : 'url-loader',
    options : {
      prefix   : 'fonts/',
      name     : '[path][name].[ext]',
      limit    : '10000',
      mimetype : 'application/font-woff2'
    }
  },
  {
    test    : /\.otf(\?.*)?$/,
    loader  : 'file-loader',
    options : {
      prefix   : 'fonts/',
      name     : '[path][name].[ext]',
      limit    : '10000',
      mimetype : 'font/opentype'
    }
  },
  {
    test    : /\.ttf(\?.*)?$/,
    loader  : 'url-loader',
    options : {
      prefix   : 'fonts/',
      name     : '[path][name].[ext]',
      limit    : '10000',
      mimetype : 'application/octet-stream'
    }
  },
  {
    test    : /\.eot(\?.*)?$/,
    loader  : 'file-loader',
    options : {
      prefix : 'fonts/',
      name   : '[path][name].[ext]'
    }
  },
  {
    test    : /\.svg(\?.*)?$/,
    loader  : 'url-loader',
    options : {
      prefix   : 'fonts/',
      name     : '[path][name].[ext]',
      limit    : '10000',
      mimetype : 'image/svg+xml'
    }
  },
  {
    test    : /\.(png|jpg)$/,
    loader  : 'url-loader',
    options : {
      limit : '8192'
    }
  }
)
/* eslint-enable */

// ------------------------------------
// Finalize Configuration
// ------------------------------------
// when we don't know the public path (we know it only when HMR is enabled [in development]) we
// need to use the extractTextPlugin to fix this issue:
// http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
if (!__DEV__) {
  debug('Applying ExtractTextPlugin to CSS loaders.')
  webpackConfig.module.rules.filter(rule =>
    rule.loader && /css/.test(rule.loader)
  ).forEach(loader => {
    const first = rule.loader
    const rest = rule.loader.slice(1)

    rule.loader = ExtractTextPlugin.extract({
      fallback: first,
      use: rest.join('!')
    })
    delete rule.loader
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin({
      filename  : '[name].[contenthash].css',
      allChunks : true
    })
  )
}

module.exports = webpackConfig
