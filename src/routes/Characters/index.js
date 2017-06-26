import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'characters',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Characters = require('./containers/CharactersContainer').default
      const reducer = require('./modules/characters').default

      injectReducer(store, { key: 'characters', reducer })

      cb(null, Characters)
    }, 'characters')
  }
})
