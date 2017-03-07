import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'services',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Services = require('./containers/ServicesContainer').default
      const reducer = require('./modules/services').default

      /*  Add the reducer to the store on key 'dashboard'  */
      injectReducer(store, { key: 'services', reducer })

      /*  Return getComponent   */
      cb(null, Services)

    /* Webpack named bundle   */
  }, 'services')
  }
})
