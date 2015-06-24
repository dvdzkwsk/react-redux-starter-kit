import assign from 'object-assign';
import webpack from 'webpack';
import { inProject, inSrc, inDist } from '../../lib/path';
import { NODE_ENV, __DEV__, __PROD__ } from '../../lib/environment';

export const DEFAULT_CONFIG = (function () {
  const config = {
    output : {
      filename : '[name].[hash].js'
    },
    target  : 'web',
    plugins : [
      new webpack.DefinePlugin({
        'process.env' : {
          'NODE_ENV' : JSON.stringify(NODE_ENV)
        },
        '__DEV__'  : __DEV__,
        '__PROD__' : __PROD__
      }),
      new webpack.optimize.DedupePlugin()
    ],
    resolve : {
      extensions : ['', '.js', '.jsx'],
      alias : {
        actions     : inSrc('actions'),
        components  : inSrc('components'),
        constants   : inSrc('constants'),
        dispatchers : inSrc('dispatchers'),
        models      : inSrc('models'),
        services    : inSrc('services'),
        stores      : inSrc('stores')
      }
    },
    module : {
      loaders : [{
        test : [/\.(js|jsx)?$/],
        include : inProject('app'),
        loaders : ['babel?optional[]=runtime&stage=0']
      }]
    }
  };

  // ----------------------------------
  // Environment-Specific Defaults
  // ----------------------------------
  if (__DEV__) {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin()
    );
  }

  if (__PROD__) {
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
})();

export default assign.bind(assign, {}, DEFAULT_CONFIG);
