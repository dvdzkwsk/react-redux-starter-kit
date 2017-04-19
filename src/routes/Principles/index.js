import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'design/principles',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Principles = require('./containers/PrinciplesContainer').default
      const reducer = require('./modules/principles').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'principles', reducer })

      /*  Return getComponent   */
      cb(null, Principles)

    /* Webpack named bundle   */
    }, 'principles')
  }
})
