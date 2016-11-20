import CoreLayout from '../layouts/CoreLayout'
import Home from './Home.1'
import CounterRoute from './Counter'

export const createRoutes = (store) => ({
  path        : '/r',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store)
  ]
})

export default createRoutes
