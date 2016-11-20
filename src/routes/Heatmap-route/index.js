import CoreLayout from './layouts/CoreLayout'
import Clickmap from './Clickmap'
import Textmap from './Textmap'

export const createRoutes = (store) => ({
  path        : '/heatmap',
  component   : CoreLayout,
  indexRoute  : Textmap,
  childRoutes : [
    Clickmap
  ]
})

export default createRoutes
