const path = require('path');
const webpackConfig = require('../config/webpack.config')

module.exports = {
  module: {
    loaders: webpackConfig.module.loaders
  }
}
