import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'System.import' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    Promise.all([
      System.import('./containers/CounterContainer'),
      System.import('./modules/counter')
    ]).then((modules) => {
      const Counter = modules[0].default
      const reducer = modules[1].default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'counter', reducer })

      /*  Return getComponent   */
      cb(null, Counter)
    })
  }
})
