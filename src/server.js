import React from 'react'
import { match } from 'react-router'
import { renderToStaticMarkup } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import { getStyles } from 'simple-universal-style-loader'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import webpackConfig from '../build/webpack.config'
import _debug from 'debug'

const debug = _debug('app:server:universal:render')

export default getHash => {
  return async function render(ctx, next) {
    const initialState = {}
    const memoryHistory = createMemoryHistory(ctx.req.url)
    const store = createStore(initialState, memoryHistory)
    const routes = require('./routes/index').default(store)
    const history = syncHistoryWithStore(memoryHistory, store, {
      selectLocationState: (state) => state.router
    })

    match({history, routes, location: ctx.req.url}, async (err, redirect, props) => {
      if (err) {
        debug("Error")
        console.log(err)
      }

      if (next
        && typeof err === 'undefined'
        && typeof redirect === 'undefined'
        && typeof props === 'undefined') {
        debug('No route found.')
        //await next()
        return
      }

      debug('Handle route', ctx.req.url)

      ctx.status = 200
      ctx.body = `<!DOCTYPE html>`
        + renderToStaticMarkup(
          <html>
          <head>
            <title>React Redux Starter Kit</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
            { getStyles().map(style =>
              <style key={style.id}
                     type="text/css">{style.parts.map(part => part.css + "\n")}</style>)}
            <script dangerouslySetInnerHTML={{__html: `___INITIAL_STATE__ = ${JSON.stringify(store.getState())}`}}></script>
          </head>
          <body>
          <div id="root" style={{height: '100%'}}>
            <AppContainer
              store={store}
              history={history}
              routes={routes}
              routerKey={Math.random()}
            />
          </div>
          <script type="text/javascript" src={`/vendor.${getHash()}.js`}></script>
          <script type="text/javascript" src={`/app.${getHash()}.js`}></script>
          </body>
          </html>
        )
    })
  }
}
