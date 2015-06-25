const server = require('../index'),
      config = require('../../config');

server.listen(config.SERVER_PORT);
console.log(`Koa server listening on port ${config.SERVER_PORT}.`);
