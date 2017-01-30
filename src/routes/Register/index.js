import { injectReducer } from '../../store/reducers'

import RegisterContainer from './containers/RegisterContainer'

export default  (store) => ({
  path: 'register',
  getComponent(nextState, cb) {
    require.ensure([
      './containers/RegisterContainer',
      './modules/register'
    ], (require) => {
      const Register = RegisterContainer
      const reducer = require('./modules/register').default

      injectReducer(store, {
        key: 'register',
        reducer
      })

      cb(null, Register)
    }, 'register')
  }
})
