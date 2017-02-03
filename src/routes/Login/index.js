import { injectReducer } from '../../store/reducers'

import LoginContainer from './containers/LoginContainer'

export default (store) => ({
  path: 'login',
  getComponent (nextState, cb) {
    require.ensure([
      './containers/LoginContainer',
      './modules/login'
    ], (require) => {
      const Login = LoginContainer
      const reducer = require('./modules/login').default

      injectReducer(store, {
        key: 'login',
        reducer
      })

      cb(null, Login)
    }, 'login')
  }
})
