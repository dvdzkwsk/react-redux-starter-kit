var webpackConfig = require('./webpack.config.js')
var babelConfig = webpackConfig.module.rules[0].use[0].query

module.exports = require('babel-jest').createTransformer(babelConfig)
