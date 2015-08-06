if (process.env.NODE_ENV === 'production') {
  module.exports = exports = [
    require('./build/webpack/client')(),
    require('./build/webpack/server')()
  ];
} else {
  module.exports = exports = [
    require('./build/webpack/client')()
  ];
}
