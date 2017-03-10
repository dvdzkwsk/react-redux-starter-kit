import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'inquiries/:id',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const InquiryDetails = require('./containers/InquiryDetailsContainer').default
      const reducer = require('./modules/inquiry').default

      /*  Add the reducer to the store on key 'inquiryForm'  */
      injectReducer(store, { key: 'inquiry', reducer })

      /*  Return getComponent   */
      cb(null, InquiryDetails)

      /* Webpack named bundle   */
    }, 'inquiry')
  }
})
