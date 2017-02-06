import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'semester/:mode(/:semesterId)',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Semester = require('./containers/SemesterContainer').default
      const reducer = require('./modules/semester').default

      injectReducer(store, { key: 'semester', reducer })

      cb(null, Semester)
    }, 'semester')
  }
})
