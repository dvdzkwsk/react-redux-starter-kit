import React from 'react'
import ReactDOM from 'react-dom'
import { createHistory, useBasename } from 'history'
import configureStore from './redux/configureStore'
import routes from './routes'
import Root from './containers/Root'

const history = useBasename(createHistory)({ basename: __BASENAME__ })
const store = configureStore(window.__INITIAL_STATE__)(history)

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
