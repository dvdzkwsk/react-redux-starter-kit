import { injectReducer } from 'store/reducers'

export default (store) => ({
  path : 'rule/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Rule = require('./containers/RuleContainer').default
      const reducer = require('./modules/rule').default
      const fetchRule = require('./modules/rule').fetchRule

      injectReducer(store, { key: 'rule', reducer })

      store.dispatch(fetchRule(nextState.params.id))

      cb(null, Rule)

    }, 'rule')
  }
})
