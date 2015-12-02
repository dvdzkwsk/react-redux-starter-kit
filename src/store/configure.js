// NOTE: Hey there, I know this looks pretty annoying (I find it just as
// inelegant as you), but there's a reason! If we want to get rid of all
// extraneous code in production environments (such as DevTools) then we need
// to avoid importing it altogether. Separating the responsible components
// responsible for these imports achieves this.
if (process.env.NODE_ENV === 'development') {
  module.exports = require('./configure.dev');
} else {
  module.exports = require('./configure.prod');
}
