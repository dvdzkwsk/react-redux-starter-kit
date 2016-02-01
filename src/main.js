import React from 'react'
import ReactDOM from 'react-dom'
import { useRouterHistory } from 'react-router'
import { createHistory } from 'history'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/lib/locale-data/en'
import de from 'react-intl/lib/locale-data/de'
import it from 'react-intl/lib/locale-data/it'
import es from 'react-intl/lib/locale-data/es'
import fr from 'react-intl/lib/locale-data/fr'

const historyConfig = { basename: __BASENAME__ }
const history = useRouterHistory(createHistory)(historyConfig)

const initialState = window.__INITIAL_STATE__
const store = configureStore({ initialState, history })

addLocaleData(en)
addLocaleData(de)
addLocaleData(it)
addLocaleData(es)
addLocaleData(fr)

// All modern browsers, expect `Safari`, have implemented
// the `ECMAScript Internationalization API`.
// For that we need to patch in on runtime.
if (!global.Intl) {
  require.ensure(['intl'], require => {
    require('intl')
    start()
  }, 'IntlBundle')
}
else start()

function start () {
  // Render the React application to the DOM
  ReactDOM.render(
    <Root history={history} routes={routes} store={store} />,
    document.getElementById('root')
  )
}
