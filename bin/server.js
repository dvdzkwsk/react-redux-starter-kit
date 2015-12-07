require('babel/register');

const config = require('../config');
const server = require('../server/app');
const debug  = require('debug')('kit:bin:server');

const host = config.server_host;
const port = config.server_port;

server.listen(port, host, function () {
  const message = 'Server is now running at ' + host + ':' + port + '.';

  if (!process.env.DEBUG) {
    console.log(message);
  } else {
    debug(message);
  }
});
