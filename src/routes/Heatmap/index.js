import CoreLayout2 from './layouts/CoreLayout2'
import Clickmap from './Clickmap'
import Textmap from './Textmap'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout2,
  indexRoute  : Textmap,
  childRoutes : [
    Clickmap
  ]
})

export default createRoutes
