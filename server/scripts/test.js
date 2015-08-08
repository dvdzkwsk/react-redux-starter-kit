const server  = require('../index'),
      request = require('supertest').agent(server.listen());

describe('Koa Server', function () {
  describe('GET /', function () {
    it('Should respond with a 200.', function (done) {
      request
        .get('/')
        .expect(200, done)
    });
  });

  describe('GET /about', function () {
    it('Should respond with a 200.', function (done) {
      request
        .get('/about')
        .expect(200, done)
    });
  });
});
