const assign        = require('object-assign'),
      webpack       = require('webpack'),
      projectConfig = require('../../config');

function makeDefaultConfig () {
  const config = {
    output : {
      filename : '[name].[hash].js'
    },
    target  : 'web',
    plugins : [
      new webpack.DefinePlugin({
        'process.env' : {
          'NODE_ENV' : JSON.stringify(projectConfig.NODE_ENV)
        },
        '__DEBUG__' : projectConfig.__DEBUG__,
        '__DEV__'   : projectConfig.__DEV__,
        '__PROD__'  : projectConfig.__PROD__
      }),
      new webpack.optimize.DedupePlugin()
    ],
    resolve : {
      extensions : ['', '.js', '.jsx'],
      alias : [
        'actions',
        'components',
        'constants',
        'containers',
        'dispatchers',
        'layouts',
        'models',
        'reducers',
        'routes',
        'services',
        'stores',
        'styles',
        'utils',
        'views'
      ].reduce(function (acc, x) {
        acc[x] = projectConfig.inSrc(x);
        return acc;
      }, {})
    },
    module : {
      preLoaders : [
        {
          test : /\.(js|jsx)$/,
          loaders : ['eslint-loader'],
          include : projectConfig.inProject(projectConfig.SRC_DIRNAME)
        }
      ],
      loaders : [{
        test : /\.(js|jsx)$/,
        include : projectConfig.inProject(projectConfig.SRC_DIRNAME),
        loaders : ['babel?optional[]=runtime&stage=0']
      }]
    },
    eslint : {
      configFile : projectConfig.inProject('.eslintrc'),
      failOnError : projectConfig.__PROD__
    }
  };

  // ----------------------------------
  // Environment-Specific Defaults
  // ----------------------------------
  if (projectConfig.__DEV__) {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    );
  }

  if (projectConfig.__PROD__) {
    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        output : {
          'comments'  : false
        },
        compress : {
          'unused'    : true,
          'dead_code' : true
        }
      })
    );
  }

  return config;
};

module.exports = function makeConfig (configModifier) {
  return assign({}, makeDefaultConfig(), configModifier);
};
