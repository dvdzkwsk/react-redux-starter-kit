Isomorphic React Redux Koa Starter Kit
======================================

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
  * redux devtools
* Immutable.js
* Karma
  * Mocha w/ Chai
  * PhantomJS
* Webpack
  * server and client bundles
  * webpack-dev-server
  * react-hot-loader
  * sass-loader
  * babel w/ babel-runtime
  * eslint-loader
  * pre-configured aliases and globals
  * easy per-environment configuration

Usage
-----

#### `npm run compile`
Runs the Webpack build system with your current NODE_ENV and compiles the application to disk (`~/dist`).

**NOTE**: I'm still searching for a good solution for when to run the server entry point bundler. As a result - for the time being - if you wish to run the Koa server you'll need to run `compile` with `NODE_ENV=production` first.

#### `npm run test`
Runs all tests for the application. In development mode this will run in watch mode and re-run individual test files when they change; in production mode a failing test will fail your build.

#### `npm run test:unit`
Similar to `npm run test`, but only runs unit tests.

#### `npm run test:e2e`
Similar to `npm run test`, but only runs e2e tests - _NOT YET AVAILABLE_.

#### `npm run deploy`
Helper script to run tests and then, on success, compile your application.

#### `npm run dev`
Runs the webpack build system just like in `compile`

#### `npm run dev:quiet`

#### `npm run server:start`

Webpack
-------

As mentioned in features, the default Webpack configuration provides some globals and aliases to make your life easier.

### Aliases
These can be used as such:

```js
require('../../components/my-component') // without alias
require('components/my-component') // with alias

// Available aliases:
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
True when the compiler is run with `--debug` (any environment)

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

TODO
----
* [ ] Better developer tools for server code
* [ ] Better developer tools for server bundle
