module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy')

  var moduleName = grunt.option('name') || 'Test'
  var moduleNameUpper = moduleName.toUpperCase()
  var moduleNameCapital = moduleName.charAt(0).toUpperCase() + moduleName.slice(1)
  var moduleNameCamel = moduleName.charAt(0).toLowerCase() + moduleName.slice(1)

  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        cwd: 'src/routes/Home',
        src: ['**'],
        dest: 'src/routes/' + moduleNameCapital + '/',
        rename: function (dest, src) {
          return dest + src.replace(/Home/g, moduleNameCapital)
        },
        options: {
          process: function (content, srcpath) {
            return content
              .replace(/Home/g, moduleNameCapital)
              .replace(/HOME/g, moduleNameUpper)
              .replace(/home/g, moduleNameCamel)
          },
        },
      },
    },
  })
  // tasks
  grunt.registerTask('createModule', ['copy'])
}
