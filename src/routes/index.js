// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'

/*  Note: Instead of JSX, we are using react-router's PlainRoute, which uses
    a simple javascript object to provide route definitions. This keeps things
    very explicit, proves there's no magic happening, and is the preferred method
    for code splitting. When creating a new route, we provide the instantiated
    store so that it can continue to inject dyamically loaded reducers and leverage
    tools such as `redux-saga` and `rereduce`  */

export const createRoutes = (store) => {
  return {
    path: '/',
    component: CoreLayout,
    indexRoute: Home,
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          // Provide store for async reducers and middleware
          require('./Counter').default(store),
          require('./NotFound').default
        ])
      })
    }
  }
}

export default createRoutes
