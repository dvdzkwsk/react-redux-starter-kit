React Redux Starter Kit
=======================

[![Join the chat at https://gitter.im/davezuko/react-redux-starter-kit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/davezuko/react-redux-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)
[![devDependency Status](https://david-dm.org/davezuko/react-redux-starter-kit/dev-status.svg)](https://david-dm.org/davezuko/react-redux-starter-kit#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

> ### This Project Recently Upgraded to Babel 6!
> Woohoo! If you'd like to try it out, you're welcome to build directly from the master branch. However, if troubleshooting issues with Babel isn't quite your thing, just pull the [stable v0.18.0 release](https://github.com/davezuko/react-redux-starter-kit/tree/v0.18.0) and continue on your way with Babel 5.

> ### Want Semicolons?
> After installing npm dependencies, open `.eslintrc`, change the `semi` rule from `never` to `always`, and then run `npm run lint:fix` -- Easy as that! Alternatively, use the same npm script after installing and extending your preferred ESLint configuration; it's easy to customize the project's code style to suit your team's needs. See, we can coexist peacefully.

This starter kit is designed to get you up and running with a bunch of awesome new front-end technologies, all on top of a configurable, feature-rich webpack build system that's already setup to provide hot reloading, CSS modules with Sass support, unit testing, code coverage reports, bundle splitting, and a whole lot more.

The primary goal of this project is to remain as **unopinionated** as possible. Its purpose is not to dictate your project structure or to demonstrate a complete sample application, but to provide a set of tools intended to make front-end development robust, easy, and, most importantly, fun. Check out the full feature list below!

Table of Contents
-----------------
1. [Requirements](#requirements)
1. [Features](#features)
1. [Getting Started](#getting-started)
1. [Usage](#usage)
1. [Structure](#structure)
1. [Webpack](#webpack)
1. [Server](#server)
1. [Styles](#styles)
1. [Testing](#testing)
1. [Deployment](#deployment)
1. [Troubleshooting](#troubleshooting)

Requirements
------------

Node `^5.0.0`

Features
--------

* [React](https://github.com/facebook/react) (`^0.14.0`)
  * Includes react-addons-test-utils (`^0.14.0`)
* [Redux](https://github.com/rackt/redux) (`^3.0.0`)
  * react-redux (`^4.0.0`)
  * redux-devtools
    * use `npm run dev:nw` to display them in a separate window.
  * redux-thunk middleware
* [react-router](https://github.com/rackt/react-router) (`^2.0.0-rc5`)
* [redux-simple-router](https://github.com/rackt/redux-simple-router) (`^1.0.0`)
* [Webpack](https://github.com/webpack/webpack)
  * [CSS modules!](https://github.com/css-modules/css-modules)
  * sass-loader
  * postcss-loader with cssnano for style autoprefixing and minification
  * Bundle splitting for app and vendor dependencies
  * CSS extraction during builts that are not using HMR (like `npm run compile`)
  * Loaders for fonts and images
* [Koa](https://github.com/koajs/koa) (`^2.0.0-alpha`)
  * webpack-dev-middleware
  * webpack-hot-middleware
* [Karma](https://github.com/karma-runner/karma)
  * Mocha w/ chai, sinon-chai, and chai-as-promised
  * PhantomJS
  * Code coverage reports
* [Babel](https://github.com/babel/babel) (`^6.3.0`)
  * [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime) so transforms aren't inlined
  * [babel-preset-react-hmre](https://github.com/danmartinez101/babel-preset-react-hmre) for:
    * react-transform-hmr (HMR for React components)
    * redbox-react (visible error reporting for React components)
* [ESLint](http://eslint.org)
  * Uses [Standard Style](https://github.com/feross/standard) by default, but you're welcome to change this!
  * Includes separate test-specific `.eslintrc` to work with Mocha and Chai

Getting Started
---------------

Just clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/davezuko/react-redux-starter-kit.git
$ cd react-redux-starter-kit
$ npm install                   # Install Node modules listed in ./package.json (may take a while the first time)
$ npm start                     # Compile and launch
```

Usage
-----

Before delving into the descriptions of each available npm script, here's a brief summary of the three which will most likely be your bread and butter:

* Doing live development? Use `npm start` to spin up the dev server.
* Compiling the application to disk? Use `npm run compile`.
* Deploying to an environment? `npm run deploy` can help with that.

**NOTE:** This package makes use of [debug](https://github.com/visionmedia/debug) to improve your debugging experience. For convenience, all of messages are prefixed with `app:*`. If you'd like to to change what debug statements are displayed, you can override the `DEBUG` environment variable to `app:*` via the CLI (e.g. `DEBUG=app:* npm start`) or update the `~/.env` file.

Great, now that introductions have been made here's everything in full detail:

* `npm start` - Spins up Koa server to serve your app at `localhost:3000`. HMR will be enabled in development.
* `npm run compile` - Compiles the application to disk (`~/dist` by default).
* `npm run dev:nw` - Same as `npm start`, but opens the redux devtools in a new window.
* `npm run dev:no-debug` - Same as `npm start` but disables redux devtools.
* `npm run test` - Runs unit tests with Karma and generates a coverage report.
* `npm run test:dev` - Runs Karma and watches for changes to re-run tests; does not generate coverage reports.
* `npm run deploy`- Runs linter, tests, and then, on success, compiles your application to disk.
* `npm run lint`- Lint all `.js` files.
* `npm run lint:fix` - Lint and fix all `.js` files. [Read more on this](http://eslint.org/docs/user-guide/command-line-interface.html#fix).

**NOTE:** Deploying to a specific environment? Make sure to specify your target `NODE_ENV` so webpack will use the correct configuration. For example: `NODE_ENV=production npm run compile` will compile your application with `~/build/webpack/_production.js`.

### Configuration

Basic project configuration can be found in `~/config/_base.js`. Here you'll be able to redefine your `src` and `dist` directories, adjust compilation settings, tweak your vendor dependencies, and more. For the most part, you should be able to make changes in here **without ever having to touch the webpack build configuration**. If you need environment-specific overrides, create a file with the name of target `NODE_ENV` prefixed by an `_` in `~/config` (see `~/config/_production.js` for an example).

Common configuration options:

* `dir_src` - application source code base path
* `dir_dist` - path to build compiled application to
* `server_host` - hostname for the Koa server
* `server_port` - port for the Koa server
* `compiler_css_modules` - whether or not to enable CSS modules
* `compiler_source_maps` - whether or not to generate source maps
* `compiler_vendor` - packages to separate into to the vendor bundle

Structure
---------

The folder structure provided is only meant to serve as a guide, it is by no means prescriptive. It is something that has worked very well for me and my team, but use only what makes sense to you.

```
.
├── bin                      # Build/Start scripts
├── build                    # All build-related configuration
│   └── webpack              # Environment-specific configuration files for webpack
├── config                   # Project configuration settings
├── server                   # Koa application (uses webpack middleware)
│   └── main.js              # Server application entry point
├── src                      # Application source code
│   ├── components           # Generic React Components (generally Dumb components)
│   ├── containers           # Components that provide context (e.g. Redux Provider)
│   ├── layouts              # Components that dictate major page structure
│   ├── redux                # Redux-specific pieces
│   │   ├── modules          # Collections of reducers/constants/actions
│   │   └── utils            # Redux-specific helpers
│   ├── routes               # Application route definitions
│   ├── static               # Static assets (not imported anywhere in source code)
│   ├── styles               # Application-wide styles (generally settings)
│   ├── views                # Components that live at a route
│   └── main.js              # Application bootstrap and rendering
└── tests                    # Unit tests
```

### Components vs. Views vs. Layouts

**TL;DR:** They're all components.

This distinction may not be important for you, but as an explanation: A **Layout** is something that describes an entire page structure, such as a fixed navigation, viewport, sidebar, and footer. Most applications will probably only have one layout, but keeping these components separate makes their intent clear. **Views** are components that live at routes, and are generally rendered within a **Layout**. What this ends up meaning is that, with this structure, nearly everything inside of **Components** ends up being a dumb component.

Webpack
-------

### Vendor Bundle
You can redefine which packages to bundle separately by modifying `compiler_vendor` in `~/config/_base.js`. These default to:

```js
[
  'history',
  'react',
  'react-redux',
  'react-router',
  'redux-simple-router',
  'redux'
]
```

### Webpack Root Resolve
Webpack is configured to make use of [resolve.root](http://webpack.github.io/docs/configuration.html#resolve-root), which lets you import local packages as if you were traversing from the root of your `~/src` directory. Here's an example:

```js
// current file: ~/src/views/some/nested/View.js

// What used to be this:
import SomeComponent from '../../../components/SomeComponent'

// Can now be this:
import SomeComponent from 'components/SomeComponent' // Hooray!
```

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/_base.js`. When adding new globals, also add them to `~/.eslintrc`.

* `process.env.NODE_ENV` - the active `NODE_ENV` when the build started
* `__DEV__` - True when `process.env.NODE_ENV` is `development`
* `__PROD__` - True when `process.env.NODE_ENV` is `production`
* `__TEST__` - True when `process.env.NODE_ENV` is `test`
* `__DEBUG__` - True when `process.env.NODE_ENV` is `development` and cli arg `--no_debug` is not set (`npm run dev:no-debug`)
* `__BASENAME__` - [npm history basename option](https://github.com/rackt/history/blob/master/docs/BasenameSupport.md)

Server
------

This starter kit comes packaged with an Koa server. It's important to note that the sole purpose of this server is to provide `webpack-dev-middleware` and `webpack-hot-middleware` for hot module replacement. Using a custom Koa app in place of [webpack-dev-server](https://github.com/webpack/webpack-dev-server) will hopefully make it easier for users to extend the starter kit to include functionality such as back-end API's, isomorphic/universal rendering, and more -- all without bloating the base boilerplate. Because of this, it should be noted that the provided server is **not** production-ready. If you're deploying to production, take a look at [the deployment section](#deployment).

Styles
------

Both `.scss` and `.css` file extensions are supported out of the box and are configured to use [CSS Modules](https://github.com/css-modules/css-modules). After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

**NOTE:** If you're importing styles from a base styles directory (useful for generic, app-wide styles), you can make use of the `styles` alias, e.g.:

```js
// current file: ~/src/components/some/nested/component/index.jsx
import 'styles/core.scss' // this imports ~/src/styles/core.scss
```

Furthermore, this `styles` directory is aliased for sass imports, which further eliminates manual directory traversing; this is especially useful for importing variables/mixins.

Here's an example:

```scss
// current file: ~/src/styles/some/nested/style.scss
// what used to be this (where base is ~/src/styles/_base.scss):
@import '../../base';

// can now be this:
@import 'base';
```

Testing
-------

To add a unit test, simply create a `.spec.js` file anywhere in `~/tests`. Karma will pick up on these files automatically, and Mocha and Chai will be available within your test without the need to import them.

Coverage reports will be compiled to `~/coverage` by default. If you wish to change what reporters are used and where reports are compiled, you can do so by modifying `coverage_reporters` in `~/config/_base.js`.

Deployment
----------

Out of the box, this starter kit is deployable by serving the `~/dist` folder generated by `npm run compile` (make sure to specify your target `NODE_ENV` as well). This project does not concern itself with the details of server-side rendering or API structure, since that demands an opinionated structure that makes it difficult to extend the starter kit. However, if you do need help with more advanced deployment strategies, here are a few tips:

If you are serving the application via a web server such as nginx, make sure to direct incoming routes to the root `~/dist/index.html` file and let react-router take care of the rest. The Koa server that comes with the starter kit is able to be extended to serve as an API or whatever else you need, but that's entirely up to you.

Have more questions? Feel free to submit an issue or join the Gitter chat!

Troubleshooting
---------------

### `npm run dev:nw` produces `cannot read location of undefined.`

This is most likely because the new window has been blocked by your popup blocker, so make sure it's disabled before trying again.

Reference: [issue 110](https://github.com/davezuko/react-redux-starter-kit/issues/110)

### High editor CPU usage after compilation

While this is common to any sizable application, it's worth noting for those who may not know: if you happen to notice higher CPU usage in your editor after compiling the application, you may need to tell your editor not to process the dist folder. For example, in Sublime you can add:


```
	"folder_exclude_patterns": [".svn",	".git",	".hg", "CVS",	"node_modules",	"dist"]
```
