const server = require('../index'),
      port   = require('../../config').SERVER_PORT;

server.listen(port);
console.log(`Koa server listening on port: ${port}.`);
