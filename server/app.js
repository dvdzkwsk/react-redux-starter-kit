import express              from 'express';
import webpack              from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback   from 'connect-history-api-fallback';
import chalk                from 'chalk';
import config               from '../config';
import webpackConfig        from '../build/webpack/development_hot';

const paths = config.get('utils_paths');
const compiler = webpack(webpackConfig);
const app = express();

app.use(historyApiFallback({
  verbose : false
}));

// Enable webpack middleware if the application is being
// run in development mode.
if (config.get('globals').__DEV__) {
  app.use(WebpackDevMiddleware(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : paths.base(config.get('dir_src')),
    hot         : true,
    quiet       : false,
    noInfo      : false,
    lazy        : false,
    stats       : {
      colors : true
    }
  }));

  app.use(WebpackHotMiddleware(compiler));

  console.log(chalk.blue(
    'Webpack HMR and dev middleware are enabled.'
  ));
}

export default app;
