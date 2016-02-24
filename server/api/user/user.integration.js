import server from '../../main';
import User from './user.model';
import request from 'supertest';

const app = server.listen();

describe('User API:', function() {
  let user;

  // Clear users before testing
  before(function() {
    return User.remove().then(function() {
      user = new User({
        name: 'Fake User',
        email: 'test@example.com',
        password: 'password'
      });

      return user.save();
    });
  });

  // Clear users after testing
  after(function() {
    return User.remove();
  });

  xdescribe('GET /api/users', function() {
    let token;

    before(function(done) {
      request(app)
        .post('/auth/local')
        .send({
          email: 'admin@admin.com',
          password: 'admin',
          role: 'admin'
        })
        .expect(200)
        .expecT('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          token = res.body.token;
          done();
        });
    });

    it('should give admin access to view all users', function() {
    });

    it('should respond with 403 if not logged in as admin', function() {
    });

  });

  describe('GET /api/users/me', function() {
    let token;

    before(function(done) {
      request(app)
        .post('/auth/local')
        .send({
          email: 'test@example.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          token = res.body.token;
          done();
        });
    });

    it('should respond with a user profile when authenticated', function(done) {
      request(app)
        .get('/api/users/me')
        .set('authorization', 'Bearer ' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          
          expect(res.body._id.toString()).to.equal(user._id.toString());
          done();
        });
    });

    it('should respond with a 401 when not authenticated', function(done) {
      request(app)
        .get('/api/users/me')
        .expect(401)
        .end(done);
    });
  });

  xdescribe('GET /api/users/:id', function() {
    let token;

    before(function(done) {
      request(app)
        .post('/auth/local')
        .send({
          email: 'test@example.com',
          password: 'password'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          token = res.body.token;
          done();
        });
    });

    it('should respond with a user profile when authenticated', function(done) {
      request(app)
        .get('/api/users/me')
        .set('authorization', 'Bearer ' + token)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          
          expect(res.body._id.toString()).to.equal(user._id.toString());
          done();
        });
    });

    it('should respond with a 401 when not authenticated', function(done) {
      request(app)
        .get('/api/users/me')
        .expect(401)
        .end(done);
    });
  });

  xdescribe('POST /api/users', function() {

    it('should create a user locally', function() {
    });

  });

  xdescribe('PUT /api/users/me/password', function() {

    it('should be able to change own password', function() {
    });

    it('should respond with 403 if not authenticated', function() {
    });

  });

  xdescribe('DELETE /api/users/:id', function() {
    let token;

    before(function(done) {
      request(app)
        .post('/auth/local')
        .send({
          email: 'admin@admin.com',
          password: 'admin',
          role: 'admin'
        })
        .expect(200)
        .expecT('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          token = res.body.token;
          done();
        });
    });

    it('should give admin access to delete a user', function() {
    });

    it('should respond with 403 if not logged in as admin', function() {
    });

  });

});
