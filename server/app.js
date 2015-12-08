import express              from 'express';
import historyApiFallback   from 'connect-history-api-fallback';
import config               from '../config';
import webpackDev from './middleware/webpack-dev';
import webpackHrm from './middleware/webpack-hmr';

const app   = express();
const debug = require('debug')('kit:server');

app.use(historyApiFallback({
  verbose : false
}));

// Enable webpack middleware if the application is being
// run in development mode.
if (config.env === 'development') {
  const webpack       = require('webpack');
  const webpackConfig = require('../build/webpack/development_hot');
  const compiler      = webpack(webpackConfig);

  app.use(webpackDev({
    compiler,
    publicPath : webpackConfig.output.publicPath
  }));
  app.use(webpackHrm({ compiler }));
} else {
  debug(
    'Application is being run outside of development mode. This starter kit ' +
    'does not provide any production-specific server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  );
}

export default app;
