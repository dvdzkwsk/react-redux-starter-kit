import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'login',

  getComponent (nextState, cb) {
    Promise.all([
      import('./containers/LoginContainer'),
      import('./modules/login')
    ]).then((modules) => {
      const Login = modules[ 0 ].default
      const reducer = modules[ 1 ].default

      injectReducer(store, { key: 'login', reducer })

      cb(null, Login)
    })
  }
})
