import React from 'react'
import { Route, IndexRoute } from 'react-router'

import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import HomeView from 'views/HomeView/HomeView'

function routeHelper(store) {
  return (
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={HomeView} />
    </Route>
  )
}

export default routeHelper
