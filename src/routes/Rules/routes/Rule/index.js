import { injectReducer } from 'store/reducers'

// TODO move create and edit routes to their own files
export const EditRoute = (store) => ({
  path : ':id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      initialize(store, require)
      const fetchRule = require('./modules/rule').fetchRule

      store.dispatch(fetchRule(nextState.params.id))

      const Rule = require('./containers/RuleContainer').default
      cb(null, Rule)
    }, 'rule')
  }
})

export const CreateRoute = (store) => ({
  path: 'new',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      initialize(store, require)
      const createRule = require('./modules/rule').createRule

      store.dispatch(createRule())

      const Rule = require('./containers/RuleContainer').default
      cb(null, Rule)
    }, 'rule')
  }
})

const initialize = (store, require) => {
  injectAllReducers(store, require)

  const fetchDimensions = require('./modules/dimensions').fetchDimensions

  store.dispatch(fetchDimensions())
}

const injectAllReducers = (store, require) => {
  const reducerTypes = ['status', 'dimensions', 'actions', 'conditions', 'rule']

  reducerTypes.forEach(key => {
    const reducer = require(`./modules/${key}`).default
    injectReducer(store, { key, reducer })
  })
}
