require('babel/register');

const config   = require('./config');
module.exports = exports = [
  require('./build/webpack/' + config.get('env'))
];
