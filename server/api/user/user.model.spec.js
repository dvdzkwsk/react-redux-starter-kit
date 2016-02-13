'use strict';

import app from '../..';
import User from './user.model';
var user;
var genUser = function() {
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
    return User.removeAsync();
  });

  beforeEach(function() {
    genUser();
  });

  afterEach(function() {
    return User.removeAsync();
  });

  it('should begin with no users', function() {
    return expect(User.findAsync({})).to
      .eventually.have.length(0);
  });

  it('should fail when saving a duplicate user', function() {
    return expect(user.saveAsync()
      .then(function() {
        var userDup = genUser();
        return userDup.saveAsync();
      })).to.be.rejected;
  });

  describe('#email', function() {
    it('should fail when saving without an email', function() {
      user.email = '';
      return expect(user.saveAsync()).to.be.rejected;
    });
  });

  describe('#password', function() {
    beforeEach(function() {
      return user.saveAsync();
    });

    it('should authenticate user if valid', function() {
      expect(user.authenticate('password')).to.be.true;
    });

    it('should not authenticate user if invalid', function() {
      expect(user.authenticate('blah')).to.not.be.true;
    });

    it('should remain the same hash unless the password is updated', function() {
      user.name = 'Test User';
      return expect(user.saveAsync()
        .spread(function(u) {
          return u.authenticate('password');
        })).to.eventually.be.true;
    });
  });

});
