module.exports = {
  description () {
    return 'generates a route'
  },

  locals (options) {
    return {
      realEntityName: options.entity.name,
      smartPath: options.settings.getSetting('smartPath'),
      dumbPath: options.settings.getSetting('dumbPath')
    }
  },

  fileMapTokens () {
    return {
      __realname__ (options) {
        return options.entity.name
      },
      __smart__ (options) {
        return options.settings.getSetting('smartPath')
      },
      __dumb__ (options) {
        return options.settings.getSetting('dumbPath')
      }
    }
  }
}
