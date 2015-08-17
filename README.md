React Redux Starter Kit
=======================
[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg)](https://travis-ci.org/davezuko/react-redux-starter-kit)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)

Starter kit to get you up and running with a bunch of awesome new technologies. This boilerplate provides server-side rendering of your routes (by way of Koa and react-router), and the sample application gives you a quick demo of Redux. All of this sits on top of a configurable, feature-rich Webpack build system that's already setup to provide unit testing, linting, hot-reloading, sass-loading with css-extraction, and a whole lot more. Check out the full feature list below!

Redux, React-Router, and React are constantly releasing new API changes. If you'd like to help keep this boilerplate up to date, please check out the [current todo list](https://github.com/davezuko/react-redux-starter-kit/blob/master/docs/todo.md) or create a new issue if you think this repo is missing something!

Table of Contents
-----------------
1. [Requirements](#requirements)
1. [Features](#features)
1. [Usage](#usage)
1. [Webpack](#webpack)
1. [Styles](#styles)
1. [Testing](#testing)
1. [Utilities](#utilities)
1. [Deployment](#deployment)
1. [Examples](#examples)
1. [Troubleshooting](#troubleshooting)

Requirements
------------

Node `^0.12.0` or io.js `^2.0.0`.

Features
--------

* [React](https://github.com/facebook/react)
* [react-router](https://github.com/rackt/react-router) (`1.0.0-beta`)
* [Redux](https://github.com/gaearon/redux) (`1.0.0`)
  * redux-devtools (enabled with `--debug` flag)
  * react-redux
* [Koa](https://github.com/koajs/koa)
* [Immutable.js](https://github.com/facebook/immutable-js)
* Karma
  * Mocha w/ Chai
  * PhantomJS
* [Webpack](https://github.com/webpack/webpack)
  * Separate server and client bundles
    * Client bundle splits app code from vendor dependencies
  * webpack-dev-server
  * react-hot-loader
  * sass-loader
    * CSS extraction in production mode
  * babel w/ babel-runtime
  * eslint-loader
    * Configured to fail production builds on error
  * Pre-configured aliases and globals
  * Easy per-environment configuration

**NOTE**: Bootstrap is loaded from its CDN for the sole purposes of making the example not look hideous. I didn't want to actually include it as an application dependency, so if you wish to remove it just delete its `<link>` tag in `~/src/index.html`.

Usage
-----

#### `npm run dev`
Runs the webpack build system just like in `compile` but enables HMR and react hot-loader. The webpack dev server can be found at `localhost:3000`.

#### `npm run dev:debug`
Same as `npm run dev` but enables `--debug` flag automatically (this will enable redux-devtools).

#### `npm run dev:quiet`
Same as `npm run dev` but disables verbose debugging information.

#### `npm run compile`
Runs the Webpack build system with your current NODE_ENV and compiles the application to disk (`~/dist`). Production builds will fail on eslint errors (but not on warnings).

**NOTE**: I'm still searching for a good solution for when to run the server entry point bundler, since it doesn't make much sense to run webpack on it when you're just using the dev server. As a result (only for the time being) if you wish to run the Koa server you'll need to run `compile` with `NODE_ENV=production` first, since that's the only time the server bundle gets compiled.

#### `npm run test`
Runs all tests for the application. When run in a production build, failing tests will fail your build.

#### `npm run test:unit`
Similar to `npm run test`, but only runs unit tests. In development mode this will run in watch mode and re-run individual test files when they change.

#### `npm run test:server`
Runs the small test suite in `~/server/scripts/test.js`. This will ideally be expanded in the future to instead act as an entry point similar to what exists for client-side tests.

#### `npm run server:start`
Kicks off the Koa server (defaults to `localhost:4000`).

#### `npm run deploy`
Helper script to run tests and then, on success, compile your application. Server tests that rely on the compiled server bundle will be run after compilation finishes.

### Configuration

Basic project configuration can be found in `~/config/index.js`. Here you'll be able to redefine your src and dist directories, as well as tweak what ports Webpack and WebpackDevServer run on.

Webpack
-------

### Configuration
Webpack bundles are separated into sub-folders that define configurations for their respective bundle (e.g. `~/build/webpack/client` and `~/build/webpack-server`). A default webpack configuration is provided in `~/build/webpack/make-config`, which exports a function that will merge a config object on top of that default configuration.

Bundle-specific configurations can further this customizability by implementing environment-specific configurations. Check out `~/build/webpack/client/_development` for an example. You can configure which bundles are used and when in `~/webpack.config.js`.

### Vendor Bundle
You can redefine which packages to treat as vendor dependencies by editing `VENDOR_DEPENDENCIES` in `~/config/index.js`. These default to

```js
VENDOR_DEPENDENCIES : [
  'immutable',
  'react',
  'react-redux',
  'react-router',
  'redux',
  'redux-devtools',
  'redux-devtools/lib/react'
]
```

### Aliases
As mentioned in features, the default Webpack configuration provides some globals and aliases to make your life easier. These can be used as such:

```js
import MyComponent from '../../components/my-component'; // without alias
import MyComponent from 'components/my-component'; // with alias

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
  utils       => '~/src/utils'
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

Styles
------

All `.scss` imports will be run through the sass-loader, extracted during production builds, and ignored during server builds. If you're requiring styles from a base styles directory (useful for generic, app-wide styles) in your JS, you can make use of the `styles` alias, e.g.:

```js
// ~/src/components/some/nested/component/index.jsx
import `styles/core.scss`;
```

Furthermore, this `styles` directory is aliased for sass imports, which further eliminates manual directory traversing. An example nested `.scss` file:

```scss
// current path: ~/src/styles/some/nested/style.scss
// what used to be this:
@import '../../base';

// can now be this:
@import 'base';
```

Testing
-------

To add a unit test, simply create `.spec.js` file anywhere in `~/src`. The entry point for Karma uses webpack's custom require to load all these files, and both Mocha and Chai will be available to you within your test without the need to import them.

Utilities
---------

This boilerplate comes with two simple utilities (thanks to [StevenLangbroek](https://github.com/StevenLangbroek)) to help speed up your Redux development process. In `~/src/utils` you'll find exports for `createConstants` and `createReducer`. The former is pretty much an even lazier `keyMirror`, so if you _really_ hate typing out those constants you may want to give it a shot. Check it out:

```js
import { createConstants } from 'utils';

export default createConstants(
  'TODO_CREATE',
  'TODO_DESTROY',
  'TODO_TOGGLE_COMPLETE'
);
```

The other utility, `create-reducer`, is designed to expedite creating reducers when they're defined via an object map rather than switch statements. As an example, what once looked like this:

```js
import { TODO_CREATE } from 'constants/todo';

const initialState = [];
const handlers = {
  [TODO_CREATE] : (state, payload) => { ... }
};

export default function todo (state = initialState, action) {
  const handler = handlers[action.type];

  return handler ? handler(state, action.payload) : state;
}
```

Can now look like this:

```js
import { TODO_CREATE } from 'constants/todo';
import { createReducer } from 'utils';

const initialState = [];

export default createReducer(initialState, {
  [TODO_CREATE] : (state, payload) => { ... }
});
```

Deployment
----------

### Dokku Requirements
  * Add io.js as a buildpack:
    - In `~/ENV` append: `export BUILDPACK_URL=https://github.com/heroku/heroku-buildpack-nodejs`

Examples
--------

Have an application you'd like to showcase that uses this starter kit? Feel free to list it here!

1. [Example TODO Application](https://github.com/davezuko/react-redux-starter-kit/tree/example/todo-application) - This is the example that originally came packaged with the starter-kit; it's since been separated so that you can spend less time clearing out sample code and more time developing something new!

Troubleshooting
---------------

### `--debug` isn't working
If you're using one of the pre-configured npm scripts, make sure you follow npm's syntax:

`npm run [command] [-- <args>]`

As an example, `npm run compile` would look like this:

`npm run compile -- --debug`
