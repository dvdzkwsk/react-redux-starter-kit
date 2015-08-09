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
      alias : {
        'action-creators' : projectConfig.inSrc('action-creators'),
        actions     : projectConfig.inSrc('actions'),
        components  : projectConfig.inSrc('components'),
        constants   : projectConfig.inSrc('constants'),
        containers  : projectConfig.inSrc('containers'),
        dispatchers : projectConfig.inSrc('dispatchers'),
        layouts     : projectConfig.inSrc('layouts'),
        models      : projectConfig.inSrc('models'),
        reducers    : projectConfig.inSrc('reducers'),
        routes      : projectConfig.inSrc('routes'),
        services    : projectConfig.inSrc('services'),
        stores      : projectConfig.inSrc('stores'),
        styles      : projectConfig.inSrc('styles'),
        views       : projectConfig.inSrc('views'),
        utils       : projectConfig.inSrc('utils')
      }
    },
    module : {
      preLoaders : [
        {
          test : /\.(js|jsx)?$/,
          loaders : ['eslint-loader'],
          include : projectConfig.inProject(projectConfig.SRC_DIRNAME)
        }
      ],
      loaders : [{
        test : /\.(js|jsx)?$/,
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
