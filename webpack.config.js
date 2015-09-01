require('babel/register');

module.exports = exports = [
  require('./build/webpack/client')(),
  require('./build/webpack/server')()
];
