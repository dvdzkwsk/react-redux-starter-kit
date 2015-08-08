React Redux Koa Starter Kit
===========================
Starter kit to get you up and running with a bunch of awesome new technologies. This boilerplate provides server-side rendering of your routes (by way of Koa and react-router), and the sample application gives you a quick demo of Redux. All of this sits on top of a configurable, feature-rich Webpack build system that's already setup to provide unit testing, linting, hot-reloading, sass-loading with css-extraction, and a whole lot more. Check out the full feature list below!

Table of Contents
-----------------
1. [Features](#features)
1. [Usage](#usage)
1. [Webpack](#webpack)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Troubleshooting](#troubleshooting)
1. [TODO](#todo)

Features
--------

* Koa
* React
* react-router (`1.0.0-beta`)
* redux (`1.0.0-beta`)
  * redux-devtools (enabled with `--debug` flag)
  * react-redux
* Immutable.js
* Karma
  * Mocha w/ Chai
  * PhantomJS
* Webpack
  * server and client bundles
    * client bundle splits app code from vendor dependencies
  * webpack-dev-server
  * react-hot-loader
  * sass-loader
    * CSS extraction in production mode
  * babel w/ babel-runtime
  * eslint-loader
  * pre-configured aliases and globals
  * easy per-environment configuration

**NOTE**: Bootstrap is loaded from its CDN for the sole purposes of making the example not look hideous. I didn't want to actually include it as an application dependency, so if you wish to remove it just delete its `<link>` tag in `~/src/index.html`.

Usage
-----

#### `npm run compile`
Runs the Webpack build system with your current NODE_ENV and compiles the application to disk (`~/dist`).

**NOTE**: I'm still searching for a good solution for when to run the server entry point bundler, since it doesn't make much sense to run webpack on it when you're just using the dev server. As a result (only for the time being) if you wish to run the Koa server you'll need to run `compile` with `NODE_ENV=production` first, since that's the only time the server bundle gets compiled.

#### `npm run test`
Runs all client-side tests for the application. In development mode this will run in watch mode and re-run individual test files when they change; in production mode a failing test will fail your build.

#### `npm run test:unit`
Similar to `npm run test`, but only runs unit tests.

#### `npm run test:e2e`
Similar to `npm run test`, but only runs e2e tests - _NOT YET AVAILABLE_.

#### `npm run test:server`
Runs the small test suite in `~/server/scripts/test.js`. This will ideally be expanded in the future to allow for an entry point similar to what exists for client-side tests.

#### `npm run deploy`
Helper script to run tests and then, on success, compile your application.

#### `npm run dev`
Runs the webpack build system just like in `compile` but enables HMR and react hot-loader. The webpack dev server can be found at `localhost:3000`.

#### `npm run dev:debug`
Same as `npm run dev` but enables `--debug` flag automatically.

#### `npm run dev:quiet`
Same as `npm run dev` but disables verbose debugging information.

#### `npm run server:start`
Kicks off the Koa server (defaults to `localhost:4000`).

### Configuration

Basic project configuration can be found in `~/config/index.js`. Here you'll be able to redefine your src and dist directories, as well as tweak what ports Webpack and WebpackDevServer run on. You'll also be able to configure what packages webpack should treat as vendor dependencies.

Webpack
-------

As mentioned in features, the default Webpack configuration provides some globals and aliases to make your life easier.

### Aliases
These can be used as such:

```js
import MyComponent from '../../components/my-component'; // without alias
import MyComponent from 'components/my-component'; // with alias

  // Available aliases:
  action-creators  => '~/src/action-creators'
  actions     => '~/src/actions'
  components  => '~/src/components'
  constants   => '~/src/constants'
  containers  => '~/src/containers'
  dispatchers => '~/src/dispatchers'
  layouts     => '~/src/layouts'
  models      => '~/src/models'
  reducers    => '~/src/reducers'
  routes      => '~/src/routes'
  services    => '~/src/services'
  stores      => '~/src/stores'
  styles      => '~/src/styles'
  views       => '~/src/views'
```

### Globals

#### `__DEV__`
True when `process.env.NODE_ENV` is `development`

#### `__PROD__`
True when `process.env.NODE_ENV` is `production`

#### `__DEBUG__`
True when the compiler is run with `--debug` (any environment).

#### `__CLIENT__`
True when the client bundler is running.

#### `__SERVER__`
True when the server bundler is running.

Testing
-------

To add a unit test, simply create `.spec.js` file anywhere in `~/src`. The entry point for Karma uses webpack's custom require to load all these files, and both Mocha and Chai will be available to you within your test without the need to import them.

Deployment
----------

### Dokku Requirements
  * Add io.js as a buildpack:
    - In `~/ENV` append: `export BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs`

Troubleshooting
---------------

### `--debug` isn't working
If you're using one of the pre-configured npm scripts, make sure you follow npm's syntax:

`npm run [command] [-- <args>]`

As an example, `npm run compile` would look like this:

`npm run compile -- --debug`

TODO
----
* [ ] Flesh out sample app
* [ ] Standardize how configs are built in ~/build (either all functions or none)
* [ ] Nodemon or something for server
* [ ] Better developer tools for server bundle
* [ ] Add ability to bake all routes into pre-rendered html files
* [ ] Need a way to get koa-static to ignore `index.html` (I don't want to use its `defer` option)
* [ ] Improve how the template is rendered server-side
  - Caching
  - Gzipping (need to verify if this is enabled or not
  - Handle react-router errors
* [ ] Travis builds to verify that:
  - tests work
  - both iojs and node ^0.12 can run dev, test, and the server
