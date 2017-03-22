import { injectReducer } from 'store/reducers'

export default (store) => ({
  path : ':id',
  /*  Async getComponent is only invoked when route matches   */
  getIndexRoute (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Inquiry = require('./containers/InquiryContainer').default
      const reducer = require('./modules/inquiry').default

      /*  Add the reducer to the store on key 'inquiryForm'  */
      injectReducer(store, { key: 'inquiry', reducer })

      /*  Return getComponent   */
      cb(null, { component: Inquiry })

      /* Webpack named bundle   */
    }, 'inquiry')
  }
})
