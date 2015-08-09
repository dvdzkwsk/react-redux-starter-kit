Changelog
=========

0.2.0
-----

#### Improvements
* Weakens various eslint rules that were too opinionated.
  - notable: `one-var` and `key-spacing`.

Thanks to [StevenLangbroek](https://github.com/StevenLangbroek) for the following:
* Adds alias `utils` to reference `~/src/utils`
* Adds `create-constants` utility.
* Adds `create-reducer` utility.
* Refactors `todos` reducer to use a function map rather than switch statements.

#### Fixes
* Nested routes are now loaded correctly in react-router when using BrowserHistory.
* Bundle compilation now fails if an eslint error is encountered when running a production build.
* Upgrades all outdated dependencies.
  - Karma, eslint, babel, sass-loader, and a handful more.
