import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'heatmap',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const heatmap = require('./view').default
      const reducer = require('../../reducers/HeatmapRoute').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'heatmapRouteData', reducer })

      /*  Return getComponent   */
      cb(null, heatmap)

    /* Webpack named bundle   */
    }, 'heatmap')
  }
})
