import server from '../../main';
import User from './user.model';
import request from 'supertest';

const app = server.listen();

describe('User API:', function() {
  let user, admin;

  // Clear users before testing
  before(function() {
    return User.remove().then(function() {
      user = new User({
        name: 'Fake User',
        email: 'test@example.com',
        password: 'password'
      });

      return user.save();
    })
    .then(function() {
      admin = new User({
        name: 'Fake Admin',
        email: 'admin@example.com',
        password: 'admin',
        role: 'admin'
      });

      return admin.save();
    });
  });

  // Clear users after testing
  after(function() {
    return User.remove();
  });

  describe('GET /api/users', function() {
    let adminToken, token;

    before(function(done) {
      request(app)
        .post('/auth/local')
        .send({
          email: 'admin@example.com',
          password: 'admin'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          adminToken = res.body.token;

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
    });

    it('should give admin access to view all users', function(done) {
      request(app)
        .get('/api/users')
        .set('authorization', 'Bearer ' + adminToken)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          expect(res.body.length).to.equal(2);
          done();
        });
    });

    it('should respond with 403 if not logged in as admin', function(done) {
      request(app)
        .get('/api/users')
        .set('authorization', 'Bearer ' + token)
        .expect(403)
        .end(done);
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

  describe('GET /api/users/:id', function() {
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
        .get(`/api/users/${user._id}`)
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

  describe('POST /api/users', function() {

    it('should create a user locally and give back token', function(done) {
      request(app)
        .post('/api/users')
        .send({
          name: 'Duck',
          email: 'duck@redux.com',
          password: 'duck'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if(err) {
            return done(err);
          }

          expect(res.body.token).to.exist;

          done();
        });
    });

  });

  describe('PUT /api/users/me/password', function() {
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

    after(function() {
      user.password = 'password';
      return user.save();
    });

    it('should be able to change own password and respond with 204', function(done) {
      request(app)
        .put('/api/users/me/password')
        .set('authorization', 'Bearer ' + token)
        .send({
          oldPassword: 'password',
          newPassword: 'newpassword'
        })
        .expect(204)
        .end(done);
    });

    it('should respond with 401 if not authenticated', function(done) {
      request(app)
        .put('/api/users/me/password')
        .send({
          oldPassword: 'password',
          newPassword: 'newpassword'
        })
        .expect(401)
        .end(done);
    });

  });

  describe('DELETE /api/users/:id', function() {
   let adminToken, token;

    before(function(done) {
      request(app)
        .post('/auth/local')
        .send({
          email: 'admin@example.com',
          password: 'admin'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }

          adminToken = res.body.token;

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
    });

    it('should give admin access to delete a user', function(done) {
      request(app)
        .delete(`/api/users/${user._id}`)
        .set('authorization', 'Bearer ' + adminToken)
        .expect(204)
        .end(done);
    });

    it('should respond with 403 if not logged in as admin', function(done) {
      request(app)
        .delete(`/api/users/${user._id}`)
        .set('authorization', 'Bearer ' + token)
        .expect(403)
        .end(done);
    });

  });

});
