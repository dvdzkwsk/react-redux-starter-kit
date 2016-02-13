'use strict';

var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglifyjs');
var wrap = require('gulp-wrap');
var bump = require('gulp-bump');
var gulpKarma = require('gulp-karma');
var gulpSequence = require('gulp-sequence').use(gulp);
var pkg = require('./package.json');
var files = require('./files');

var karmaTestConfig = gulpKarma({configFile: 'karma.conf.js', action: 'run'});

var banner = '/*!\n' +
' * <%= pkg.name %>\n' +
' * <%= pkg.description %>\n' +
' * @version v<%= pkg.version %>\n' +
' * @link <%= pkg.homepage %>\n' +
' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
' */\n';

gulp.task('bump', function(){
    return gulp.src('./*.json')
    .pipe(bump({type:'minor'}))
    .pipe(gulp.dest('./'));
});

gulp.task('buildDev', function () {
    return gulp.src(files.mergeFilesFor('src'))
    .pipe(wrap(banner+'(function(window, angular, undefined){<%= contents %>})(window, window.angular);', {pkg: pkg}))
    .pipe(ngAnnotate())
    .pipe(gulp.dest('./build/'));
});

gulp.task('minBuild', function () {
    return gulp.src('./build/'+pkg.name+'.js')
    .pipe(uglify(pkg.name+'.min.js', {
        outSourceMap: false,
        mangle: true,
        preserveComments: 'some'
    }))
    .pipe(wrap(banner+'<%= contents %>', {pkg: pkg}))
    .pipe(gulp.dest('./build/'));
});

gulp.task('copyBuild', function () {
    return gulp.src('./build/*.js')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', function(){
    return gulp.watch(files.mergeFilesFor('src'), ['test']);
});

gulp.task('test', function () {
    return gulp.src(files.mergeFilesFor('karma-src')).pipe(karmaTestConfig);
});

gulp.task('testBuild', function () {
    return gulp.src(files.mergeFilesFor('karma-build')).pipe(karmaTestConfig);
});

gulp.task('testMin', function () {
    return gulp.src(files.mergeFilesFor('karma-min')).pipe(karmaTestConfig);
});

gulp.task('build', gulpSequence('buildDev', 'minBuild', ['testBuild','testMin']));

gulp.task('release', gulpSequence('bump', 'build', 'copyBuild'));
