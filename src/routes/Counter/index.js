import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'counter',
  getComponents (location, next) {
    // Define route dependencies for bundling
    require.ensure([
      './containers/CounterContainer',
      './components/CounterView',
      './modules/counter'
    ], (require) => {
      // These modules can be lazily evaluated using require hook, and
      // will not loaded until the router invokes this callback. Webpack
      // detects this and creates a split point.
      const CounterView = require('./components/CounterView').default
      const counterReducer = require('./modules/counter').default

      // Inject our reducer into the store
      injectReducer(store, 'counter', counterReducer)

      // Render The CounterView (our 'main' route component)
      next(null, CounterView)

      // Note: If you do not need any route-specific layout (or helpers,
      // ie. doc title), you can pass a container directly to `next`.
    })
  }
})
