import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'bikemap',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const BikeMap = require('./containers/BikeMapContainer').default
      const reducer = require('./modules/bikeMap').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'bikemap', reducer })

      /*  Return getComponent   */
      cb(null, BikeMap)

    /* Webpack named bundle   */
    }, 'bikemap')
  }
})
