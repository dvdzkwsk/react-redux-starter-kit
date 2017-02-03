// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import RegisterRoute from './Register'
import LoginRoute from './Login'
import NotFoundRoute from './NotFound'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  const requireLogin = (nextState, replace, cb) => {
    const { auth: { authToken } } = store.getState()
    if (!authToken) {
      replace('login')
    }
    cb()
  }

  const requirePublic = (nextState, replace, cb) => {
    const { auth: { authToken } } = store.getState()
    if (authToken) {
      replace('semesters')
    }
    cb()
  }

  return ({
    path        : '/',
    component   : CoreLayout,
    indexRoute  : Home,
    childRoutes : [
      {
        onEnter: requirePublic,
        childRoutes: [
          RegisterRoute(store),
          LoginRoute(store)
        ]
      },
      {
        onEnter: requireLogin,
        childRoutes: [
          CounterRoute(store)
        ]
      },
      NotFoundRoute
    ]
  })
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
