require('babel/register');

const server  = require('../server'),
      request = require('supertest').agent(server.listen());

describe('Koa Server', function () {
  describe('GET /', function () {
    it('Should respond with a 200.', function (done) {
      request
        .get('/')
        .expect(200, done);
    });

    it('Should respond with sample welcome text.', function (done) {
      request
        .get('/')
        .expect(/Welcome to the React Redux Starter Kit/, done);
    });
  });
});
