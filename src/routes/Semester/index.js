import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'semester/:mode(/:semesterId)',

  getComponent (nextState, cb) {
    Promise.all([
      import('./containers/SemesterContainer'),
      import('./modules/semester')
    ]).then((modules) => {
      const Semester = modules[ 0 ].default
      const reducer = modules[ 1 ].default

      injectReducer(store, { key: 'semester', reducer })

      cb(null, Semester)
    })
  }
})
