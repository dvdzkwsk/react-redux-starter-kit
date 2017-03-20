import { injectReducer } from 'store/reducers'

export default (store) => ({
  path : 'new',
  /*  Async getComponent is only invoked when route matches   */
  getIndexRoute (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const NewInquiry = require('./containers/NewInquiryContainer').default
      const reducer = require('./modules/newInquiry').default

      /*  Add the reducer to the store on key 'newInquiry'  */
      injectReducer(store, { key: 'newInquiry', reducer })

      /*  Return getComponent   */
      cb(null, { component: NewInquiry })

    /* Webpack named bundle   */
  }, 'newInquiry')
  }
})
