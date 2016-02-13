var pkg = require('./package.json');

var pkgFiles = {
  angular: [
    'bower_components/angular/angular.js'
  ],
  karma: [
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js'
  ],
  'karma-build': [
    '@karma',
    'build/' + pkg.name + '.js',
    '@karma-tests'
  ],
  'karma-min': [
    '@karma',
    'build/' + pkg.name + '.min.js',
    '@karma-tests'
  ],
  'karma-src': [
    '@karma',
    '@src',
    '@karma-tests'
  ],
  'karma-tests': [
    'test/**/*.spec.js'
  ],
  src: [
    'src/**/*.js',
  ]
};

if (module.exports) {
    module.exports.files = pkgFiles;
    module.exports.mergeFilesFor = function() {
    var files = [];

    Array.prototype.slice.call(arguments, 0).forEach(function(filegroup) {
      pkgFiles[filegroup].forEach(function(file) {
        // replace @ref
        var match = file.match(/^\@(.*)/);
        if (match) {
          files = files.concat(pkgFiles[match[1]]);
        } else {
          files.push(file);
        }
      });
    });

    return files;
  };
}
