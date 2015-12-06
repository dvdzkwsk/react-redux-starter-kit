import express              from 'express';
import historyApiFallback   from 'connect-history-api-fallback';
import config               from '../config';

const app   = express();
const debug = require('debug')('kit:server');

app.use(historyApiFallback({
  verbose : false
}));

// Enable webpack middleware if the application is being
// run in development mode.
if (config.get('globals').__DEV__) {
  const webpack       = require('webpack');
  const webpackConfig = require('../build/webpack/development_hot');
  const compiler      = webpack(webpackConfig);

  app.use(require('./middleware/webpack-dev')({
    compiler,
    publicPath : webpackConfig.output.publicPath
  }));
  app.use(require('./middleware/webpack-hmr')({ compiler }));
} else {
  debug(
    'Application is being run outside of development mode. This starter kit ' +
    'does not come with any server functionality for production. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  );
}

export default app;
