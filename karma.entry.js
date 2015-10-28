// Require all ".spec.js" files in ~/tests.
var context = require.context('./tests', true, /.+\.spec\.js$/);
context.keys().forEach(context);
module.exports = context;
