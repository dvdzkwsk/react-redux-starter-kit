Changelog
=========

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
