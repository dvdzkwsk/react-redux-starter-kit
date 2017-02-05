import { injectReducer } from '../../store/reducers'
import { loadSemesters } from './modules/semesters'

export default (store) => ({
  path: 'semesters',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Semesters = require('./containers/SemestersContainer').default
      const reducer = require('./modules/semesters').default

      injectReducer(store, { key: 'semesters', reducer })

      cb(null, Semesters)
    }, 'semesters')
  },
  onEnter (nextState, replace) {
    loadSemesters(store)
  }
})
