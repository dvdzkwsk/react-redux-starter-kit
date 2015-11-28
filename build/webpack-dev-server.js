import webpack              from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback   from 'connect-history-api-fallback';
import express              from 'express';
import config               from '../config';
import webpackConfig        from './webpack/development_hot';

const paths = config.get('utils_paths');
const compiler = webpack(webpackConfig);
const app = express();

app.use(historyApiFallback({
  verbose: false
}));

app.use(WebpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  contentBase: paths.project(config.get('dir_src')),
  hot: true,
  quiet: false,
  noInfo: false,
  lazy: false,
  stats: {
    colors: true
  }
}));

app.use(WebpackHotMiddleware(compiler));

export default app;
