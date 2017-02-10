import { injectReducer } from '../../store/reducers'
import { combineReducers } from 'redux'

export default (store) => ({
  path: 'semesters',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Semesters = require('./containers/SemestersContainer').default
      const semestersDataReducer = require('./modules/semestersData').default
      const semestersMainViewReducer = require('./modules/semestersMainView').default

      const semestersViewReducer = combineReducers({
        main: semestersMainViewReducer
      })

      injectReducer(store, { key: 'semestersData', reducer: semestersDataReducer })
      injectReducer(store, { key: 'semestersView', reducer: semestersViewReducer })

      cb(null, Semesters)
    }, 'semesters')
  }
})
