import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import createStore from './store/createStore'
import MyApp from './containers/AppContainer'
import createRoutes from './routes/index'
import { configureAll } from './config'

configureAll()

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__
const store = createStore(initialState)

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const routes = createRoutes(store)

  ReactDOM.render(
    <AppContainer><MyApp store={store} routes={routes} /></AppContainer>,
    MOUNT_NODE
  )
}

if (module.hot) {
  module.hot.accept('./containers/AppContainer', render);
}

// ========================================================
// Go!
// ========================================================
render()
