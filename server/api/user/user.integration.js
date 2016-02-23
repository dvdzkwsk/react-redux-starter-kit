import server from '../../main';
import User from './user.model';
import request from 'supertest';

const app = server.listen();

describe('User API:', () => {
  let user;

  // Clear users before testing
  before(() => {
    return User.remove().then(() => {
      user = new User({
        name: 'Fake User',
        email: 'test@example.com',
        password: 'password'
      });

      return user.save();
    });
  });

  // Clear users after testing
  after(() => {
    return User.remove();
  });

  describe('GET /api/users/me', () => {
    let token;

    before(done => {
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

    it('should respond with a user profile when authenticated', done => {
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

    xit('should respond with a 401 when not authenticated', done => {
      request(app)
        .get('/api/users/me')
        .expect(401)
        .end(done);
    });
  });
});
