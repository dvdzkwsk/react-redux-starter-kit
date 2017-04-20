const path = require('path');
//import path from 'path'

module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ["style", "css", "sass"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}


// webpackConfig.module.loaders = [{
//   test    : /\.(js|jsx)$/,
//   exclude : /node_modules/,
//   loader  : 'babel',
//   query   : project.compiler_babel
// }, {
//   test   : /\.json$/,
//   loader : 'json'
// }]
