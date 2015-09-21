Changelog
=========

0.14.0
------

#### Features
* Replaces `react-transform-webpack-hmr` with its replacement `react-transform-hmr`. Thanks to [daviferreira](https://github.com/daviferreira).
* Replaces `delicate-error-reporter` with `redbox-react`. Thanks to [bulby97](https://github.com/bulby97).
* Created a `no-server` branch [here](https://github.com/davezuko/react-redux-starter-kit/tree/no-server) to make it easier for users who don't care about Koa.

#### Improvements
* Renames `client` directory to `src` to be more intuitive.
* `inline-source-map` has been replaced by `source-map` as the default webpack devTool to reduce build sizes.
* Refactors configuration file to focus on commonly-configured options rather than mixing them with internal configuration.
* Swaps `dev` and `dev:debug` so debug tools are now enabled by default and can be disabled instead with `dev:no-debug`.
* Repositions Redux devtools so they no longer block errors displayed by `redbox-react`.
* Adds explicit directory references to some `import` statements to clarify which are from from `npm` and which are local.

#### Fixes
* Fixes naming in `HomeView` where `mapStateToProps` was incorrectly written as `mapDispatchToProps`.

#### Deprecations
* Removes local test utilities (in `~/src/utils/test`).

0.13.0
------

#### Features
* Adds `react-transform-catch-errors` along with `delicate-error-reporter`. Thanks [bulby97](https://github.com/bulby97) for this!

#### Fixes
* ExtractTextPlugin is once again production only. This fixes an issue where styles wouldn't be hot reloaded with Webpack.

0.12.0
------

#### Features
* Upgrades react-router to `^3.0.0`. This is the only reason for the minor-level version  bump.
* Webpack now uses OccurrenceOrderPlugin to produce consistent bundle hashes.

#### Fixes
* Adds `history` to vendor dependencies to fix HMR caused by upgrade to react-router `1.0.0-rc`

#### Improvements
* Server no longer modifies initial counter state by default.
* Adds invariant error in route rendering method to enforce router state definition through props.

0.11.0
------

#### Features
* Upgrades all React dependencies to `0.14.0-rc1`
* Upgrades react-router to `1.0.0-rc`
  * Updates client and server rendering accordingly
* Adds Sinon-Chai for improved assertions and function spies
* Adds option to disable eslint when in development

#### Improvements
* Improved example unit tests using react-addons-test-utils and Sinon Chai

0.10.0
------

#### Features
* Initial state can now be injected from the server (still WIP).
* Adds react-addons-test-utils as a devDependency.

#### Improvements
* Eslint no longer prevents webpack from bundling in development mode if an error is emitted.
  * See: https://github.com/MoOx/eslint-loader/issues/23
* Updates all `.jsx` files to `.js`. (https://github.com/davezuko/react-redux-starter-kit/issues/37)
* Updates all React component file names to be ProperCased.

0.9.0
-----

#### Features
* Koa server now uses gzip middleware.

#### Improvements
* Switches out react-hot-loader in favor of [react-transform-webpack-hmr](https://github.com/gaearon/react-transform-webpack-hmr).
* Eslint configuration now uses Airbnb's configuration (slightly softened).
* Migrates all actual development dependencies to devDependencies in `package.json`.
* Example store and view are now more intuitive (simple counter display).
* CSS-loader dependency upgraded from `0.16.0` to `0.17.0`.

#### Deprecations
* Removes unnecessary object-assign dependency.

0.8.0
-----

#### Improvements
* All build-, server-, and client-related code is now ES6.
* Significantly refactors how client and server webpack configs are built.
* `reducers/index.js` now exports combined root reducer.
* Client application code now lives in `~/client` instead of `~/src` in order to conform to Redux standards.

#### Fixes
* Redux store now explicitly handles HMR.

#### Changes
* Webpack compiler configurations are no longer merged on top of a base default configuration. This can become unwieldy and even though explicitly writing each configuration file out is more verbose, it ends up being more maintainable.

#### Deprecations
* Quiet mode has been removed (`npm run dev:quiet`).

0.7.0
-----
#### New Features
* Support for redux-devtools in separate window with `dev:debugnw`
  - Thanks to [mlusetti](https://github.com/mlusetti)

#### Improvements
* Upgrades react to `0.14.0-beta3`
* Upgrades react to `0.14.0-beta3`
* Upgrades redux to `^2.0.0`
* Upgrades redux-devtools to `^2.0.0`
* Upgrades react-redux to `^2.0.0`

#### Fixes
* Configuration file name trimming on Windows machines
  - Thanks to [nuragic](https://github.com/nuragic)

0.6.0
-----

#### Fixes
* Fixes potential spacing issues when Webpack tries to load a config file.
  - Thanks to [nuragic](https://github.com/nuragic) for his [PR](https://github.com/davezuko/react-redux-starter-kit/pull/32)

#### Improvements
* Upgrades koa to `1.0.0`
* Upgrades react-redux to `1.0.0`
* Upgrades object-assign to `0.4.0`

0.5.0
-----

#### Improvements
* Restructures src directory so filenames are more identifiable.

#### Breaking Changes
* Removes action-creators alias as it's unlikely to be used.

0.4.0
-----

#### Improvements
* Cleans up/removes example code per https://github.com/davezuko/react-redux-starter-kit/issues/20

0.3.1
-----

#### Fixes
* https://github.com/davezuko/react-redux-starter-kit/issues/19
  - Invalid initialStates from server-side router will now yield to the next middleware.

0.3.0
-----

#### Improvements
* Bumps Redux version to first major release.
* Bumps Redux-devtools version to first major release.

#### Fixes
* Fixes broken hot-reload in `:debug` mode.
  - Temporarily fixed by moving `redux-devtools` into the vendor bundle.

0.2.0
-----

#### Improvements
* Weakens various eslint rules that were too opinionated.
  - notable: `one-var` and `key-spacing`.

Thanks to [StevenLangbroek](https://github.com/StevenLangbroek) for the following:
* Adds alias `utils` to reference `~/src/utils`
* Adds `createConstants` utility.
* Adds `createReducer` utility.
* Refactors `todos` reducer to use a function map rather than switch statements.

#### Fixes
* Nested routes are now loaded correctly in react-router when using BrowserHistory.
* Bundle compilation now fails if an eslint error is encountered when running a production build.
  - Thanks [clearjs](https://github.com/clearjs)
* Upgrades all outdated dependencies.
  - Karma, eslint, babel, sass-loader, and a handful more.
