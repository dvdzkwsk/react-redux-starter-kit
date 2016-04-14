import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  getComponent (nextState, next) {
    require.ensure([
      './containers/CounterContainer',
      './modules/counter'
    ], (require) => {
  /*  These modules are lazily evaluated using require hook, and
      will not loaded until the router invokes this callback. */
      const Counter = require('./containers/CounterContainer').default
      const reducer = require('./modules/counter').default

      injectReducer(store, { key: 'counter', reducer })

      next(null, Counter)
    })
  }
})
