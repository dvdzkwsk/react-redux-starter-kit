if (process.env.NODE_ENV === 'development') {
  module.exports = require('./Root.dev');
} else {
  module.exports = require('./Root.prod');
}
