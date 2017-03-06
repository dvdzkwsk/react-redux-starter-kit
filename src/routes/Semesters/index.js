import { injectReducer } from '../../store/reducers'
import { combineReducers } from 'redux'

export default (store) => ({
  path: 'semesters',
  getComponent (nextState, cb) {
    Promise.all([
      import('./containers/SemestersContainer'),
      import('./modules/semestersData'),
      import('./modules/semestersMainView')
    ]).then((modules) => {
      const Semesters = modules[ 0 ].default
      const semestersDataReducer = modules[ 1 ].default
      const semestersMainViewReducer = modules[ 2 ].default

      const semestersViewReducer = combineReducers({
        main: semestersMainViewReducer
      })

      injectReducer(store, { key: 'semestersData', reducer: semestersDataReducer })
      injectReducer(store, { key: 'semestersView', reducer: semestersViewReducer })

      cb(null, Semesters)
    })
  }
})
