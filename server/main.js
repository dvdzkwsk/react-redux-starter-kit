const express = require('express')
const debug = require('debug')('app:server')
const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack.config')
const project = require('../config/project.config')
const compress = require('compression')

const app = express()

// Apply gzip compression
app.use(compress())

const exampleStory = {
  id: 123,
  title: 'New Law Requires Welfare Recipients To Submit Sweat To Prove How Hard They’re Looking For Job',
  url: 'http://www.theonion.com/article/new-law-requires-welfare-recipients-to-submit-swea-36626',
  imgUrl: 'http://images2.onionstatic.com/onion/2695/9/16x9/800.jpg',
  topic: {
    name: 'Social Issues',
    mod: 'pkeshary'
  },
  stats: {
    uniqueCommenters: 4,
    comments: 6,
    votes: 12,
    commentsWithinGeo: 2,
  },
};

const exampleComment = {
  id: 1,
  text: `Finally, some accountability. When I was younger working
  in the factory, we had to wring our clothes into a measuring cup
  so Boss could see how many ounces of sweat we produced. Made us work harder.`,
  member: 'fun_rots_character',
  votes: 0,
  ttl: 'ttl value',
  replies: [],
};

let comments = [exampleComment];

// ------------------------------------
// Apply Webpack HMR Middleware
// ------------------------------------
if (project.env === 'development') {
  const compiler = webpack(webpackConfig)

  debug('Enabling webpack dev and HMR middleware')
  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath  : webpackConfig.output.publicPath,
    contentBase : project.paths.client(),
    hot         : true,
    quiet       : project.compiler_quiet,
    noInfo      : project.compiler_quiet,
    lazy        : false,
    stats       : project.compiler_stats
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__webpack_hmr'
  }))

  // Serve static assets from ~/public since Webpack is unaware of
  // these files. This middleware doesn't need to be enabled outside
  // of development since this directory will be copied into ~/dist
  // when the application is compiled.
  app.use(express.static(project.paths.public()))

  // STORY
  app.get('/story/:storyId', function(req, res) {
    res.send(JSON.stringify(exampleStory));
  });

  // COMMENT
  app.post('/comment/', function(req, res) {
    comments.push(Object.assign({}, exampleComment, { id: comments.length + 1 }));
    // send back hard-coded comment for now
    res.send(Object.assign({}, exampleComment, { id: comments.length }));
  });

  app.get('/comment/:storyId', function(req, res) {
    res.send(JSON.stringify(comments));
  });

  // This rewrites all routes requests to the root /index.html file
  // (ignoring file requests). If you want to implement universal
  // rendering, you'll want to remove this middleware.
  app.use('*', function (req, res, next) {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  debug(
    'Server is being run outside of live development mode, meaning it will ' +
    'only serve the compiled application bundle in ~/dist. Generally you ' +
    'do not need an application server for this and can instead use a web ' +
    'server such as nginx to serve your static files. See the "deployment" ' +
    'section in the README for more information on deployment strategies.'
  )

  // Serving ~/dist by default. Ideally these files should be served by
  // the web server and not the app server, but this helps to demo the
  // server in production.
  app.use(express.static(project.paths.dist()))
}

module.exports = app
