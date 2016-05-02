module.exports = {
  description () {
    return 'generates a redux duck'
  },

  locals (options) {
    var route = options.entity.options.route || options.entity.options.r
    route = route || ''
    var routePath = route ? 'routes/' : 'store'
    var importPath = routePath + route
    return {
      importPath,
      realEntityName: options.entity.name
    }
  },

  fileMapTokens (options) {
    var route = options.entity.options.route || options.entity.options.r
    return {
      __routepath__ () {
        return route ? 'routes' : 'store'
      },
      __realname__ () {
        return options.entity.name
      },
      __route__ () {
        return route || ''
      }
    }
  }
}
