const project = require('../project.config')

module.exports = {
  'coverageDirectory': './coverage/',
  'collectCoverage': true,
  'globals': {
    'process.env': { 'NODE_ENV': 'test' },
    '__DEV__': false,
    '__TEST__': true,
    '__PROD__': false,
  },
  'moduleDirectories': ['node_modules', 'src'],
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/tests/__mocks__/styleMock.js'
  },
  'rootDir': project.basePath,
  'roots': ['<rootDir>/src/', '<rootDir>/tests/'],
  'transform': {
    '^.+\\.js$': '<rootDir>/build/jest.transform.js'
  }
}
