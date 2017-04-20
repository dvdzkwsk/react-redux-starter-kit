import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'design',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Design = require('./containers/DesignContainer').default
      const reducer = require('./modules/design').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'design', reducer })

      /*  Return getComponent   */
      cb(null, Design)

    /* Webpack named bundle   */
    }, 'design')
  }
})
