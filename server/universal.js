import Koa from 'koa'
import webpack from 'webpack'
import { match } from 'react-router'
import { renderToStaticMarkup } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import createStore from '../src/store/createStore'
import AppContainer from '../src/containers/AppContainer'
import webpackConfig from '../build/webpack.config'
import _debug from 'debug'

const debug = _debug('app:server:universal')
const app = new Koa()

app.use((ctx, next) => {
  const initialState = {}
  const memoryHistory = createMemoryHistory(ctx.req.url)
  const store = createStore(initialState, memoryHistory)
  const routes = require('../src/routes/index').default(store)
  const history = syncHistoryWithStore(memoryHistory, store, {
    selectLocationState: (state) => state.router
  })

  match({routes, location: ctx.req.url}, (err, redirect, props) => {
    ctx.status = 200
    ctx.body = `<!DOCTYPE html>`
      + renderToStaticMarkup(
        <html>
        <head>
          <title>sl</title>
        </head>
        <body>
        <AppContainer
          store={store}
          history={history}
          routes={routes}
          routerKey={Math.random()}
        />
        </body>
        </html>
      )
  })

  if (next) {
    //await next()
  }
})

export default app
