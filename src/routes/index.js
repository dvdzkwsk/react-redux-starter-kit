import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import RulesRoute from './Rules'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    RulesRoute(store)
  ]
})

export default createRoutes
