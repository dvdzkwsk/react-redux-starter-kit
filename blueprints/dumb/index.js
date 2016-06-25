module.exports = {
  description () {
    return 'generates a dumb (pure) component'
  },

  locals (options) {
    var dumbPath = options.settings.getSetting('dumbPath')
    var route = options.entity.options.route || options.entity.options.r
    route = route || ''
    var routePath = route ? 'routes/' : ''
    var importPath = routePath + route
    importPath = importPath ? importPath + '/' + dumbPath : dumbPath
    return {
      importPath,
      routeName: route
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
      }
    }
  }
}
