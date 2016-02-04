// ---------------------------------------
// Test Environment Setup
// ---------------------------------------
import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'
import chaiAsPromised from 'chai-as-promised'
import chaiEnzyme from 'chai-enzyme'

chai.use(sinonChai)
chai.use(chaiAsPromised)
chai.use(chaiEnzyme())

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

// ---------------------------------------
// Require Tests
// ---------------------------------------
// require all `tests/**/*.spec.js`
const testsContext = require.context('./', true, /\.spec\.js$/)
testsContext.keys().forEach(testsContext)

// require all `src/**/*.js` except for `main.js` (for isparta coverage reporting)
const componentsContext = require.context('../src/', true, /^((?!main).)*\.js$/)

componentsContext.keys().forEach(componentsContext)
