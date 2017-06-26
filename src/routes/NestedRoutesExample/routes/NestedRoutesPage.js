export default (store) => ({
  path : 'nested-page',

  getComponent (nextState, cb) {
    require.ensure([
        '../components/NestedRoutesPage'
      ], (require) => {
      const NestedRoutesPage = require('../components/NestedRoutesPage').default

      cb(null, NestedRoutesPage)
    }, 'nested-routes-page')
  }
})


