import AppLayout from './routes/App-layout'
import Home from './routes/Home-route'
import CounterRoute from './routes/Counter'

export const createRoutes = (store) => ({
  path        : '/',
  component   : AppLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store)
  ]
})

export default createRoutes
