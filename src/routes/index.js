import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { updateLocation } from '../store/location'
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'

const createRoutes = store => {
  return withRouter(({ history }) => {
    store.unlisten = history.listen((locaiton) => {
      updateLocation(store)(location.pathname)
      store.unlisten()
    })

    return (
      <CoreLayout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={CounterRoute(store)} />
      </CoreLayout>
    )
  })
}

export default createRoutes
