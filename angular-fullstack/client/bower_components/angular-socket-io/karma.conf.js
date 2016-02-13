
module.exports = function (config) {
  config.set({
    basePath: '',
    files: [
      'mock/socket-io.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'socket.js',
      '*.spec.js'
    ],

    reporters: ['progress'],

    port: 9876,
    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],
    frameworks: ['jasmine'],

    captureTimeout: 60000,

    autoWatch: true,
    singleRun: false
  });
};
