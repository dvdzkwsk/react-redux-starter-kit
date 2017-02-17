import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'rules',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const rulesReducer = require('./modules/rules').default

      injectReducer(store, { key: 'rules', reducer: rulesReducer })

      const navigationReducer = require('./modules/navigation').default

      injectReducer(store, { key: 'navigation', reducer: navigationReducer})

      const fetchRules = require('./modules/rules').fetchRules

      store.dispatch(fetchRules())

      const Navigation = require('./containers/NavigationContainer').default
      cb(null, Navigation)
    }, 'rules')
  }
})
