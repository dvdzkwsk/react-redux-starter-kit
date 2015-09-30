React Redux Starter Kit
=======================
[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)

Starter kit to get you up and running with a bunch of awesome new front-end technologies, all on top of a configurable, feature-rich Webpack build system that's already setup to provide unit testing, linting, hot reloading, sass imports with CSS extraction, and a whole lot more. Check out the full feature list below!

Redux, React-Router, and React are constantly releasing new API changes. If you'd like to help keep this boilerplate up to date, please contribute or create a new issue if you think this starter kit is missing something!

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
1. [Troubleshooting](#troubleshooting)

Requirements
------------

Node (`^4.0.0` | `^0.12.0`) or io.js `^2.0.0`.

Features
--------

* [React](https://github.com/facebook/react) (`0.14.0-rc1`)
  * Includes react-addons-test-utils (`0.14.0-rc1`)
* [react-router](https://github.com/rackt/react-router) (`1.0.0-rc1`)
* [Redux](https://github.com/gaearon/redux) (`^3.0.0`)
  * react-redux
  * redux-devtools
    * use `npm run dev:nw` to display in a separate window.
* [Immutable.js](https://github.com/facebook/immutable-js)
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ Chai and Sinon-Chai
  * PhantomJS
* [Babel](https://github.com/babel/babel)
  * `react-transform-hmr` for hot reloading
  * `react-transform-catch-errors` with `redbox-react` for more visible error reporting
  * Uses babel runtime rather than inline transformations
* [Webpack](https://github.com/webpack/webpack)
  * Splits app code from vendor dependencies
  * webpack-dev-server
  * sass-loader with CSS extraction
  * eslint-loader
    * Uses [Airbnb's eslint config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) (with some softened rules)
    * Configured to fail production builds on error
  * Pre-configured folder aliases and globals

Usage
-----

#### `npm run dev` also `npm start`
Runs the webpack build system just like in `compile` but enables HMR. The webpack dev server can be found at `localhost:3000`.

#### `npm run dev:nw`
Same as `npm run dev` but opens the debug tools in a new window.

#### `npm run dev:no-debug`
Same as `npm run dev` but disables devtools.

#### `npm run compile`
Runs the Webpack build system with your current NODE_ENV and compiles the application to disk (`~/dist`). Production builds will fail on eslint errors (but not on warnings).

#### `npm run test`
Runs unit tests with Karma.

#### `npm run deploy`
Helper script to run tests and then, on success, compile your application.

### Configuration

Basic project configuration can be found in `~/config/index.js`. Here you'll be able to redefine your src and dist directories, as well as tweak what ports Webpack and WebpackDevServer run on.

Webpack
-------

### Configuration
The webpack compiler configuration is located in `~/build/webpack`. When the webpack dev server runs, only the client compiler will be used. When webpack itself is run to compile to disk, both the client and server configurations will be used. Settings that are bundle agnostic should be defined in `~/config/index.js` and imported where needed.

### Vendor Bundle
You can redefine which packages to treat as vendor dependencies by editing `vendor_dependencies` in `~/config/index.js`. These default to:

```js
[
  'history',
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

This boilerplate comes with two simple utilities (thanks to [StevenLangbroek](https://github.com/StevenLangbroek)) to help speed up your Redux development process. In `~/client/utils` you'll find exports for `createConstants` and `createReducer`. The former is pretty much an even lazier `keyMirror`, so if you _really_ hate typing out those constants you may want to give it a shot. Check it out:

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

Troubleshooting
---------------

Nothing yet. Having an issue? Report it and I'll get to it as soon as possible!
