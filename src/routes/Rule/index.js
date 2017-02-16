import { injectReducer } from 'store/reducers'

// TODO make edit and create child routes
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
      const createRule = require('./modules/rule').createRule
      const fetchRule = require('./modules/rule').fetchRule

      injectReducer(store, { key: 'rule', reducer: ruleReducer })

      if (nextState.params.id === 'new') {
        store.dispatch(createRule())
      } else {
        store.dispatch(fetchRule(nextState.params.id))
      }

      cb(null, Rule)
    }, 'rule')
  }
})
