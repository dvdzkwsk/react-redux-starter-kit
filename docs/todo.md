Documentation
-------------
* [ ] Document sass `import` aliases.
* [ ] Document the webpack configuration pipeline

Improvements
------------
* [ ] Move bootstrap dependency to core styles file.

Dependencies
------------
* [ ] Upgrade eslint to `1.1.0` once `eslint-loader` updates its dependencies to accept it.

Redux
-----
* [ ] Integrate React-Router and Redux (possibly w/ https://github.com/acdlite/redux-react-router)

Build
-----
* [ ] Re-enable io.js on TravisCI build (why is npm install breaking?)
* [ ] Add ability to bake all routes into pre-rendered html files
* [ ] Add support for images
* [ ] Add support for fonts (i.e. such as with Bootstrap)

Server
------
* [ ] Development support
  * [ ] Integration with webpack-dev-server
  * [ ] Nodemon or something similar for auto-reloading
* [ ] Improve unit tests for post-deployment checks
* [ ] Improve how the template is rendered server-side
  * [ ] Caching
  * [ ] Gzipping (need to verify if this is enabled or not)
  * [ ] Handle react-router errors
* [ ] Tests should be dynamically required
