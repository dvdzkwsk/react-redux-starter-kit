if (process.env.NODE_ENV === 'development') {
  module.exports = require('./configure.dev')
} else {
  module.exports = require('./configure.prod')
}
