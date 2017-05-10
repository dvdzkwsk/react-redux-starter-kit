const project = require('../config/project.config')
const server = require('../server/main')
const debug = require('debug')('app:bin:dev-server')
//const socket = require('socket.io')

// Запускаем сервер и подключаем socket.io
//server.listen(project.server_port)
//const io = socket.listen(server)

server.listen(project.server_port)

debug(`Server is now running at http://localhost:${project.server_port}.`)
