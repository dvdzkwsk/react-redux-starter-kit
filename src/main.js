import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import makeRoutes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'

const initialState = window.__INITIAL_STATE__
const store = configureStore({ initialState, history })

const routes = makeRoutes(store)

// Render the React application to the DOM
ReactDOM.render(
  <Root history={browserHistory} routes={routes} store={store} />,
  document.getElementById('root')
)
