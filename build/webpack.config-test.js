var nodeExternals = require('webpack-node-externals')
var path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

var project = require('../project.config')
const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)
const __DEV__ = project.env === 'development'

const extractStyles = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash].css',
  allChunks: true,
  disable: __DEV__
})

module.exports = {
  entry: {
    main: ['./tests/test-bundler.js']
  },
  target: 'node',
  output: {
    path: path.resolve('./build', project.basePath),
    filename: 'build/tests.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: [
                'babel-plugin-transform-class-properties',
                'babel-plugin-syntax-dynamic-import',
                [
                  'babel-plugin-transform-runtime',
                  {
                    helpers: true,
                    polyfill: false, // we polyfill needed features in src/normalize.js
                    regenerator: true
                  },
                ],
                [
                  'babel-plugin-transform-object-rest-spread',
                  {
                    useBuiltIns: true // we polyfill Object.assign in src/normalize.js
                  },
                ],
              ],
              presets: [
                'babel-preset-react',
                ['babel-preset-env', {
                  targets: {
                    ie9: true,
                    uglify: true,
                    modules: false
                  }
                }],
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
  		{
        test: /\.(sass|scss)$/,
        use: [
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:base64:5]',
          'sass-loader',
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optipng: {
                optimizationLevel: 7
              },
              gifsicle: {
                interlaced: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
				// delays coverage til after tests are run, fixing transpiled source
				// coverage error
        enforce: 'post',
        test: /\.js$/,
        exclude: /(tests|node_modules|bower_components|build)\//,
        loader: 'istanbul-instrumenter-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve(project.basePath),
      inProject(project.srcDir),
    ]
  }
}
