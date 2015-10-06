import webpack           from 'webpack';
import config            from '../../config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const paths = config.get('utils_paths');

const webpackConfig = {
  name    : 'client',
  target  : 'web',
  entry   : {
    app : [
      paths.project(config.get('dir_src'))
    ],
    vendor : config.get('vendor_dependencies')
  },
  output : {
    filename   : '[name].[hash].js',
    path       : paths.project(config.get('dir_dist')),
    publicPath : '/'
  },
  plugins : [
    new webpack.DefinePlugin(config.get('globals')),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      template : paths.src('index.html'),
      hash     : true,
      filename : 'index.html',
      minify   : true,
      inject   : 'body'
    })
  ],
  resolve : {
    extensions : ['', '.js', '.jsx'],
    alias      : config.get('utils_aliases')
  },
  module : {
    preLoaders : [
      {
        test : /\.(js|jsx)$/,
        loaders : ['eslint-loader'],
        exclude : /node_modules/
      }
    ],
    loaders : [
      {
        test : /\.(js|jsx)$/,
        exclude : /node_modules/,
        loader  : 'babel',
        query   : {
          stage    : 0,
          optional : ['runtime'],
          env      : {
            development : {
              plugins : ['react-transform'],
              extra   : {
                'react-transform' : {
                  transforms : [{
                    transform : 'react-transform-catch-errors',
                    imports   : ['react', 'redbox-react']
                  }]
                }
              }
            }
          }
        }
      },
      {
        test    : /\.scss$/,
        loaders : [
          'style-loader',
          'css-loader',
          'autoprefixer?browsers=last 2 version',
          'sass-loader?includePaths[]=' + paths.src('styles')
        ]
      }
    ]
  },
  eslint : {
    configFile : paths.project('.eslintrc')
  }
};

// NOTE: this is a temporary workaround. I don't know how to get Karma
// to include the vendor bundle that webpack creates, so to get around that
// we remove the bundle splitting when webpack is used with Karma.
const commonChunkPlugin = new webpack.optimize.CommonsChunkPlugin(
  'vendor', '[name].[hash].js'
);
commonChunkPlugin.__KARMA_IGNORE__ = true;
webpackConfig.plugins.push(commonChunkPlugin);

export default webpackConfig;
