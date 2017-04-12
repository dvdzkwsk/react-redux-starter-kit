const path = require('path')

module.exports = {
  // Should probably never need to be overriden
  filesPath: function () {
    return path.join(this.path, 'files')
  },

  beforeInstall: function (options) {},
  afterInstall: function (options) {}
}
