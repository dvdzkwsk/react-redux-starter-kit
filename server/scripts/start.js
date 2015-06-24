const server      = require('../index'),
      SERVER_PORT = require('../../config');

server.listen(SERVER_PORT);
console.log(`Server listening on port ${SERVER_PORT}.`);
