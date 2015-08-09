// Require all ".spec.js" files in ~/src.
var context = require.context('./src', true, /.+\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
