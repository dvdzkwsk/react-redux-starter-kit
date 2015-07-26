require('babel/register');

var bundles = [
  require('./build/webpack/client')()
];

if (process.env.NODE_ENV === 'production') {
  bundles.push(require('./build/webpack/server')())
}

module.exports = exports = bundles;
