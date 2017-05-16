const chalk = require('chalk')
const figures = require('figures')

exports.log = (...messages) => console.log(...messages)
exports.error = (...messages) => console.error(chalk.red(figures.cross, ...messages))
exports.info = (...messages) => console.info(chalk.cyan(figures.info, ...messages))
exports.success = (...messages) => console.log(chalk.green(figures.tick, ...messages))
exports.warn = (...messages) => console.warn(chalk.yellow(figures.warning, ...messages))
