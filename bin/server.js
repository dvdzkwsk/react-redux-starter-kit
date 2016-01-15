require('babel-register')

const config = require('../config')
const server = require('../server/main')
const debug = require('debug')('app:bin:server')

const port = config.server_port
const host = config.server_host

server.listen(port)
debug(`Server is now running at ${host}:${port}.`)
