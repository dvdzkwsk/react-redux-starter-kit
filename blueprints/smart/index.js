module.exports = {
  description () {
    return 'generates a smart (container) component'
  },

  locals (options) {
    var dumbPath = options.settings.getSetting('dumbPath')
    var smartPath = options.settings.getSetting('smartPath')
    var route = options.entity.options.route || options.entity.options.r
    route = route || ''
    var routePath = route ? 'routes/' : ''
    var importPath = routePath + route
    var importDumbPath = importPath ? importPath + '/' + dumbPath : dumbPath
    var importSmartPath = importPath ? importPath + '/' + smartPath : smartPath
    return {
      importSmartPath,
      importDumbPath,
      dumbPath,
      smartPath,
      routeName: options.entity.options.route
    }
  },

  fileMapTokens (options) {
    var route = options.entity.options.route || options.entity.options.r
    return {
      __routepath__ () {
        return route ? 'routes' : ''
      },
      __route__ () {
        return route || ''
      },
      __dumb__ () {
        return options.settings.getSetting('dumbPath')
      },
      __smart__ () {
        return options.settings.getSetting('smartPath')
      }
    }
  }
}
