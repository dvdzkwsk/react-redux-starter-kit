import webpack from 'webpack'
import webpackConfig from './webpack.config'
import config from '../config'
import _debug from 'debug'
import fs from 'fs'

const debug = _debug('app:webpack:config')
const paths = config.utils_paths
const {__DEV__, __PROD__, __TEST__} = config.globals

const APP_ENTRY_PATHS = [
  'babel-polyfill',
  paths.src('server.js')
]

let o
export default {
  ...webpackConfig,

  name: 'server',

  target: 'node',

  entry: APP_ENTRY_PATHS,

  output: {
    filename: `server.js`,
    path: paths.dist(),
    library: 'server',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  externals: o = fs.readdirSync(paths.base('node_modules'))
    .concat([
    'react-dom/server', 'react/addons',
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  plugins: [
    new webpack.DefinePlugin(config.globals),
  ]

  //node: {
  //  __filename: true,
  //  __dirname: true
  //}
}
