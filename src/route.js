import AppLayout from './layouts/App'
import HomeLayout from './layouts/Home'
import HeatmapLayout from './layouts/Heatmap'

export const createRoutes = (store) => ({
  path        : '/',
  component   : AppLayout,
  indexRoute  : HomeLayout,
  childRoutes : [
    HeatmapLayout
  ]
})

export default createRoutes
