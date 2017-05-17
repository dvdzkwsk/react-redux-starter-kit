const chalk = require('chalk')
const figures = require('figures')

// Need to support Node versions that don't support spreading function arguments
const spread = (fn) => function () {
  return fn([].slice.call(arguments))
}

exports.log = console.log.bind(console)

exports.error = spread((messages) => {
  console.error(chalk.red.apply(chalk, [figures.cross].concat(messages)))
})

exports.info = spread((messages) => {
  console.info(chalk.cyan.apply(chalk, [figures.info].concat(messages)))
})

exports.success = spread((messages) => {
  console.log(chalk.green.apply(chalk, [figures.tick].concat(messages)))
})

exports.warn = spread((messages) => {
  console.warn(chalk.yellow.apply(chalk, [figures.warning].concat(messages)))
})
