const fs = require('fs')
const babelrcPresets = JSON.parse(fs.readFileSync('.babelrc', 'utf-8')).presets

module.exports = neutrino => {
  neutrino.config.module
    .rule('compile')
    .loader('babel', ({ options }) => {
      options.presets = babelrcPresets

      return { options };
    })
};
