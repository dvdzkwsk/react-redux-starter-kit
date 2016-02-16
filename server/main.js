import Koa from 'koa'
import convert from 'koa-convert'
import mongoose from 'mongoose';
import webpack from 'webpack'
import webpackConfig from '../build/webpack.config'
import historyApiFallback from 'koa-connect-history-api-fallback'
import serve from 'koa-static'
import _debug from 'debug'
import config from '../config'
import webpackProxyMiddleware from './middleware/webpack-proxy'
import webpackDevMiddleware from './middleware/webpack-dev'
import webpackHMRMiddleware from './middleware/webpack-hmr'
import essentialMiddlewares from './middleware/essentials';
import router from './router';

// Configure Mongoose Promise
mongoose.Promise = require('bluebird');

// Connect to MongoDB
mongoose.connect(config.mongo_uri, config.mongo_options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

const debug = _debug('app:server')
const paths = config.utils_paths
const app = new Koa()

// Apply essential middlewares
essentialMiddlewares(app);

// Apply API and Auth routes
app.use(router.routes());

// This rewrites all routes requests to the root /index.html file
// (ignoring file requests). If you want to implement isomorphic
// rendering, you'll want to remove this middleware.
app.use(convert(historyApiFallback({
  verbose: false
})))

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (config.env === 'development') {
  const compiler = webpack(webpackConfig)

  // Enable webpack-dev and webpack-hot middleware
  const { publicPath } = webpackConfig.output

  if (config.proxy && config.proxy.enabled) {
    const options = config.proxy.options
    app.use(convert(webpackProxyMiddleware(options)))
  }

  app.use(webpackDevMiddleware(compiler, publicPath))
  app.use(webpackHMRMiddleware(compiler))

  // Serve static assets from ~/src/static since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(convert(serve(paths.client('static'))))
} else {
  debug(
    'Server is being run outside of live development mode. This starter kit ' +
    'does not provide any production-ready server functionality. To learn ' +
    'more about deployment strategies, check out the "deployment" section ' +
    'in the README.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(convert(serve(paths.base(config.dir_dist))))
}

export default app;

// // Populate databases with sample data
// if (config.seedDB) { require('./config/seed'); }

// // Setup server
// var app = express();
// var server = http.createServer(app);
// var socketio = require('socket.io')(server, {
//   serveClient: config.env !== 'production',
//   path: '/socket.io-client'
// });
// require('./config/socketio')(socketio);
// require('./config/express')(app);
// require('./routes')(app);


// setImmediate(startServer);
