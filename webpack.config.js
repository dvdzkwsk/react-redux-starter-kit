require('babel/register');

const config   = require('./config');
module.exports = require('./build/webpack/' + config.get('env'));
