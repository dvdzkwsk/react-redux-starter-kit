import config from '../config'
import server from '../server/main'
import _debug from 'debug'

(async () => {
  const debug = _debug('app:bin:server')
  const port = config.server_port
  const host = config.server_host

  let app = await server()

  app.listen(port)

  debug(`Server is now running at http://${host}:${port}.`)
  debug(`Server accessible via localhost:${port} if you are using the project defaults.`)
})()
