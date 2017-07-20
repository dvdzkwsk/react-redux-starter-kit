import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack 2 - use 'import' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    Promise
      .all([
        import(/* webpackChunkName: 'counter' */ './containers/CounterContainer'),
        import(/* webpackChunkName: 'counter' */ './modules/counter')
      ])
      .then(([ CounterContainer, counter ]) => {
        injectReducer(store, {
          key: 'counter',
          reducer: counter.default
        })

        /*  Return getComponent   */
        cb(null, CounterContainer.default)
      })
      .catch(err => {
        cb(err)
      })
  }
})
