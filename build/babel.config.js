
module.exports = {
  cacheDirectory: true,
  plugins: [
    'babel-plugin-transform-class-properties',
    'babel-plugin-syntax-dynamic-import',
    [
      'babel-plugin-transform-runtime',
      {
        helpers: true,
        polyfill: false, // we polyfill needed features in src/normalize.js
        regenerator: true,
      },
    ],
    [
      'babel-plugin-transform-object-rest-spread',
      {
        useBuiltIns: true // we polyfill Object.assign in src/normalize.js
      },
    ],
  ],
  presets: [
    'babel-preset-es2015',
    'babel-preset-react',
    ['babel-preset-env', {
      targets: {
        ie9: true,
        uglify: true,
        modules: false,
      },
    }],
  ]
}
