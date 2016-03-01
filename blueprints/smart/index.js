module.exports = {
  description () {
    return 'generates a smart (container) component'
  },

  fileMapTokens () {
    return {
      __smart__: (options) => {
        return options.settings.getSetting('smartPath')
      }
    }
  }
}
