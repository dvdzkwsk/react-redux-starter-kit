import { injectReducer } from '../../../store/reducers'
import NestedRoutesPage from './NestedRoutesPage'

export default (store) => {
  return {
    path        : 'parent-of-nested',
    indexRoute  : NestedRoutesPage(store),
    childRoutes : [
      NestedRoutesPage(store),
    ],
    getComponent (nextState, cb) {
      require.ensure([
        '../containers/NestedRoutesExampleContainer',
        '../modules/nestedRoutesExample'
      ], (require) => {
        const NestedRoutesExample = require('../containers/NestedRoutesExampleContainer').default
        const reducer = require('../modules/nestedRoutesExample').default

        injectReducer(store, { key: 'nestedRoutesExample', reducer })

        cb(null, NestedRoutesExample)
      }, 'nested-routes-example')
    }
  }
}
