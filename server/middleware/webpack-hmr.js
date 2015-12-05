import WebpackHotMiddleware from 'webpack-hot-middleware';
import chalk                from 'chalk';

export default function ({ compiler }) {
  console.log(chalk.blue('Webpack HMR is enabled.'));

  return WebpackHotMiddleware(compiler);
}
