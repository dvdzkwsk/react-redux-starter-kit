// require all `tests/**/*.spec.js`
const testsContext = require.context('./', true, /\.spec\.js$/)
testsContext.keys().forEach(testsContext)

// require all `src/**/*.js` except for `main.js` (for isparta coverage reporting)
const componentsContext = require.context('../src/', true, /^((?!main).)*\.js$/)

componentsContext.keys().forEach(componentsContext)
