require('babel/register');

const server = require('../server'),
      config = require('../config');

const port = config.get('server_port');

server.listen(port);
console.log('Koa server listening on port: ' + port);
