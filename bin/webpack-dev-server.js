require('babel/register');

var chalk     = require('chalk');
var devServer = require('../build/webpack-dev-server');
var config    = require('../config');

var host = config.get('webpack_host');
var port = config.get('webpack_port');

devServer.listen(port, host, function () {
  console.log(chalk.green("webpack-dev-server is now running at "+host+":"+port+"."));
});
