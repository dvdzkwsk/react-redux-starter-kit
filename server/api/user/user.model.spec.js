import app from '../../main';
import User from './user.model';

let user;
const genUser = function() {
  user = new User({
    provider: 'local',
    name: 'Fake User',
    email: 'test@example.com',
    password: 'password'
  });
  return user;
};

describe('User Model', function() {
  before(function() {
    // Clear users before testing
    return User.remove();
  });

  beforeEach(function() {
    genUser();
  });

  afterEach(function() {
    return User.remove();
  });

  it('should begin with no users', function() {
    return expect(User.find({})).to
      .eventually.have.length(0);
  });

  it('should fail when saving a duplicate user', function() {
    return expect(user.save()
      .then(function() {
        const userDup = genUser();
        return userDup.save();
      })).to.be.rejected;
  });

  describe('#profile', function() {
    it('should have a profile virtual', function() {
      expect(user.profile.name).to.equal(user.name);
      expect(user.profile.role).to.equal(user.role);
    });
  });
  
  describe('#token', function() {
    it('should have a token virtual', function() {
      expect(user.token._id).to.equal(user._id);
      expect(user.token.role).to.equal(user.role);
    });
  });
  
  describe('#email', function() {
    it('should fail when saving without an email', function() {
      user.email = '';
      return expect(user.save()).to.be.rejected;
    });
  });

  describe('#password', function() {
    beforeEach(function() {
      return user.save();
    });

    it('should authenticate user if valid', function() {
      expect(user.authenticate('password')).to.be.true;
    });

    it('should not authenticate user if invalid', function() {
      expect(user.authenticate('blah')).to.not.be.true;
    });

    it('should remain the same hash unless the password is updated', function() {
      user.name = 'Test User';
      return expect(user.save()
        .then(u => {
          return u.authenticate('password');
        })).to.eventually.be.true;
    });
  });

});
