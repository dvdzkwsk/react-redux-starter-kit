import React from 'react'
import { match } from 'react-router'
import { renderToStaticMarkup } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import createMemoryHistory from 'react-router/lib/createMemoryHistory'
import { getStyles } from 'simple-universal-style-loader'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import _debug from 'debug'

const debug = _debug('app:server:universal:render')

export default getClientInfo => {
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

      let { app, vendor } = getClientInfo().assetsByChunkName
      let scripts = [].concat(
        Array.isArray(vendor) ? vendor : [vendor],
        Array.isArray(app) ? app : [app]
        )
        .filter(asset => (/\.(js)$/i).test(asset))
        .map((asset, i) => <script key={i} type="text/javascript" src={`/${asset}`}></script>)
      let styles = [].concat(
        Array.isArray(app) ? app : [app],
        Array.isArray(vendor) ? vendor : [vendor]
        )
        .filter(asset => (/\.(css)$/i).test(asset))
        .map((asset, i) => <link key={i} rel="stylesheet" href={`/${asset}`}/>)

      ctx.status = 200
      ctx.body = `<!DOCTYPE html>`
        + renderToStaticMarkup(
          <html>
          <head>
            <title>React Redux Starter Kit</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"/>
            { styles.length
              ? styles
              : getStyles().map(style =>
              <style key={style.id}
                     type="text/css">{style.parts.map(part => part.css + "\n")}</style>)}
            <script
              dangerouslySetInnerHTML={{__html: `___INITIAL_STATE__ = ${JSON.stringify(store.getState())}`}}></script>
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
          { scripts }
          </body>
          </html>
        )
    })
  }
}
