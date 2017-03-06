import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'dashboard',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Dashboard = require('./containers/DashboardContainer').default
      const reducer = require('./modules/dashboard').default

      /*  Add the reducer to the store on key 'dashboard'  */
      injectReducer(store, { key: 'dashboard', reducer })

      /*  Return getComponent   */
      cb(null, Dashboard)

    /* Webpack named bundle   */
  }, 'dashboard')
  }
})
