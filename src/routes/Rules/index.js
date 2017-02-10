import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'rules',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Rules = require('./containers/RulesContainer').default
      const reducer = require('./modules/rules').default

      /*  Add the reducer to the store on key 'rules'  */
      injectReducer(store, { key: 'rules', reducer })

      /*  Return getComponent   */
      cb(null, Rules)

    /* Webpack named bundle   */
  }, 'rules')
  }
})
