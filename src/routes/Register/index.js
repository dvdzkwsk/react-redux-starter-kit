import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'register',

  getComponent (nextState, cb) {
    Promise.all([
      import('./containers/RegisterContainer'),
      import('./modules/register')
    ]).then((modules) => {
      const Register = modules[ 0 ].default
      const reducer = modules[ 1 ].default

      injectReducer(store, { key: 'register', reducer })

      cb(null, Register)
    })
  }
})
