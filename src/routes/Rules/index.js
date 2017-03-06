import { injectReducer } from '../../store/reducers'
import { CreateRoute, EditRoute } from './routes/Rule'

export default (store) => ({
  path : 'rules',
  // indexRoute: { component: RulesView },
  getIndexRoute (partialNextState, cb) {
    require.ensure([], (require) => {
      injectAllReducers(store, require)

      const fetchRules = require('./modules/rules').fetchRules

      store.dispatch(fetchRules())

      const RulesView = require('./components/RulesView').default
      cb(null, { component: RulesView })
    }, 'rules')
  },
  childRoutes: [
    CreateRoute(store),
    EditRoute(store)
  ]
})

const injectAllReducers = (store, require) => {
  const reducerTypes = ['navigation', 'rules']

  reducerTypes.forEach(key => {
    const reducer = require(`./modules/${key}`).default
    injectReducer(store, { key, reducer })
  })
}
