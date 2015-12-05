import WebpackDevMiddleware from 'webpack-dev-middleware';
import chalk                from 'chalk';
import config               from '../../config';

const paths = config.get('utils_paths')

export default function ({ compiler, publicPath }) {
  console.log(chalk.blue('Webpack dev middleware is enabled.'));

  return WebpackDevMiddleware(compiler, {
    publicPath,
    contentBase : paths.base(config.get('dir_client')),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : {
      colors : true
    }
  });
}
