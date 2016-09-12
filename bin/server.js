const config = require('../config')
const server = require('../server/main')
const debug = require('debug')('app:bin:server')

const { server_host: host, server_port: port } = config
const friendlyHost = host === require('ip').address() ? 'localhost' : host

server.listen(port)
debug(`Server is now running at http://${friendlyHost}:${port}.`)
