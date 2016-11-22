import App from './layouts/App'
import Home from './layouts/Home'
import Heatmap from './layouts/Heatmap'

export const createRoutes = (store) => ({
  path        : '/',
  component   : App,
  indexRoute  : Home,
  childRoutes : [
    Heatmap
  ]
})

export default createRoutes
