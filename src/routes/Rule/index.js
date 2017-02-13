import { injectReducer } from 'store/reducers'

export default (store) => ({
  path : 'rule/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const dimensionsReducer = require('./modules/dimensions').default
      const fetchDimensions = require('./modules/dimensions').fetchDimensions

      injectReducer(store, { key: 'dimensions', reducer: dimensionsReducer })

      store.dispatch(fetchDimensions())

      const Rule = require('./containers/RuleContainer').default
      const ruleReducer = require('./modules/rule').default
      const fetchRule = require('./modules/rule').fetchRule

      injectReducer(store, { key: 'rule', reducer: ruleReducer })

      store.dispatch(fetchRule(nextState.params.id))

      cb(null, Rule)
    }, 'rule')
  }
})
