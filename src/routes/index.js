// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import RegisterRoute from './Register'
import LoginRoute from './Login'
import SemestersRoute from './Semesters'
import SemesterRoute from './Semester'
import NotFoundRoute from './NotFound'

import { logout } from './Login/modules/login'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => {
  const requireLogin = (nextState, replace, cb) => {
    const { auth: { authToken } } = store.getState()
    if (!authToken) {
      // replace('login')
    }
    cb()
  }

  const requirePublic = (nextState, replace, cb) => {
    const { auth: { authToken } } = store.getState()
    if (authToken) {
      // replace('semesters')
    }
    cb()
  }

  const logoutRedirect = (nextState, replace, cb) => {
    replace('login')
    logout(store)
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
          CounterRoute(store),
          SemestersRoute(store),
          SemesterRoute(store)
        ]
      },
      {
        path: 'logout',
        onEnter: logoutRedirect
      },
      NotFoundRoute
    ]
  })
}

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
     import('./Counter').then((module) => {
       cb(null, [
         // Remove imports!
         module.default(store)
       ])
     })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
