import webpack from 'webpack';
import config  from '../../config';

const paths   = config.get('utils_paths'),
      globals = config.get('globals');

const webpackConfig = {
  name    : 'server',
  target  : 'node',
  entry   : {
    app : [
      paths.src('entry-points/server')
    ]
  },
  // Don't include npm packages since these can be imported at runtime
  // from the Koa application.
  externals : fs.readdirSync('node_modules').filter(x => x !== '.bin'),
  output : {
    filename : 'index.js',
    path     : paths.dist('server'),
    libraryTarget : 'commonjs2'
  },
  plugins : [
    new webpack.DefinePlugin(Object.assign(config.get('globals'), {
      __SERVER__ : true
    })),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  resolve : {
    extensions : ['', '.js', '.jsx'],
    alias : config.get('utils_aliases')
  },
  module : {
    preLoaders : [
      {
        test : /\.(js|jsx)$/,
        loaders : ['eslint-loader'],
        include : paths.project(config.get('dir_src'))
      }
    ],
    loaders : [
      {
        test    : /\.(js|jsx)$/,
        include :  paths.project(config.get('dir_src')),
        loaders : ['babel?optional[]=runtime&stage=0']
      },
      {
        test    : /\.scss$/,
        loaders : [
          'css/locals?module&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?includePaths[]=' + paths.src('styles')
        ]
      }
    ]
  },
  eslint : {
    configFile  : paths.project('.eslintrc'),
    failOnError : globals.__PROD__
  }
};

export default webpackConfig;
