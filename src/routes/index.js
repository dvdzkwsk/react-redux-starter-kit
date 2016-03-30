import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

/*  We only need to import the bundles necessary for rendering the `indexRoute`
    The rest will be loaded asynchronously  */

export const createRoutes = (store) => {
  return {
    path: '/',
    component: CoreLayout,
    indexRoute: Home,
    getChildRoutes (location, next) {
      // AMD require.ensure syntax will be updated in the near future to use
      // System loader, but is currently required by webpack to create split points
      require.ensure([/* Do not ensure! (load 'em async) */], (require) => {
        next(null, [
          // Provide store for async reducers and middleware
          require('./Counter').default(store),
          require('./NotFound').default
        ])
      })
    }
  }
}

/*  Note: Instead of JSX, we are using react-router's PlainRoute, which uses
    a simple javascript object to provide route definitions. This keeps things
    very explicit, proves there's no magic happening, and is the preferred method
    for code splitting. When creating a new route, we provide the instantiated
    store so that it can continue to inject dyamically loaded reducers and leverage
    tools such as `redux-saga` and `rereduce`  */

export default createRoutes
