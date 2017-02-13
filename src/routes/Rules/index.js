import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'rules',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Rules = require('./containers/RulesContainer').default
      const reducer = require('./modules/rules').default
      const fetchRules = require('./modules/rules').fetchRules

      injectReducer(store, { key: 'rules', reducer })

      store.dispatch(fetchRules())

      cb(null, Rules)
    }, 'rules')
  }
})
