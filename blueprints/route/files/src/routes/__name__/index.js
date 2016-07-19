import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: '<%= dashesEntityName %>',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const <%= pascalEntityName %> = require('./containers/<%= pascalEntityName %>Container').default
      const reducer = require('./modules/<%= pascalEntityName %>').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: '<%= pascalEntityName %>', reducer })

      /*  Return getComponent   */
      cb(null, <%= pascalEntityName %>)

    /* Webpack named bundle   */
    }, '<%= pascalEntityName %>')
  }
})
