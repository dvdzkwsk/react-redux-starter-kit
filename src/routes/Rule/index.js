import { injectReducer } from 'store/reducers'

// TODO move create and edit routes to their own files
export default (store) => ({
  path : 'rule',
  childRoutes: [RuleCreateRoute(store), RuleEditRoute(store)]
})

const RuleCreateRoute = (store) => ({
  path : 'new',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      injectAllReducers(store, require)

      const Rule = require('./containers/RuleContainer').default
      const createRule = require('./modules/rule').createRule

      store.dispatch(createRule())

      cb(null, Rule)
    }, 'rule')
  }
})

const RuleEditRoute = (store) => ({
  path : ':id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      injectAllReducers(store, require)

      const Rule = require('./containers/RuleContainer').default
      const fetchRule = require('./modules/rule').fetchRule

      store.dispatch(fetchRule(nextState.params.id))

      cb(null, Rule)
    }, 'rule')
  }
})

const injectAllReducers = (store, require) => {
  const reducerTypes = ['status', 'dimensions', 'conditions', 'actions', 'rule']

  reducerTypes.forEach(key => {
    const reducer = require(`./modules/${key}`).default
    injectReducer(store, { key, reducer })
  })

  const fetchDimensions = require('./modules/dimensions').fetchDimensions

  store.dispatch(fetchDimensions())
}
