import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import nProgressMiddleware from './nprogress-middleware'

export default [
  thunk,
  createLogger(),
  nProgressMiddleware
]
