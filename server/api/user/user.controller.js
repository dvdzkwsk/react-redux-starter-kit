import User from './user.model';
import passport from 'passport';
import config from '../../../config';
import jwt from 'jsonwebtoken';

function validationError(ctx, statusCode = 422) {
  return function(err) {
    ctx.status = statusCode;
    ctx.body = { message: err.message };
  }
}

function respondWithResult(ctx, statusCode = 200) {
  return function(entity) {
    ctx.status = statusCode;
    ctx.body = entity;
  };
}

function handleResourceNotFound(ctx, statusCode = 404) {
  return function(entity) {
    ctx.status = statusCode;
    ctx.body = { message: `${entity} not found` };
  };
}

function handleError(ctx, statusCode = 500) {
  return function(err) {
    ctx.status = statusCode;
    ctx.body = { message: err.message };
  };
}

/**
 * Get list of users
 * restriction: 'admin'
 */
export async function index(ctx, next) {
  try {
    const users = User.find({}, '-salt -password');
    respondWithResult(ctx)(users);
  } catch (err) {
    handleError(ctx, err);
  }
}

/**
 * Get a single user
 */
export function show(req, res, next) {
  try {
    const user = User.findById(ctx.params.id);
    if (!user) return handleResourceNotFound(ctx);
    .then(user => {
      if (!user) {
        return res.status(404).end();
      }
      res.json(user.profile);
    })
    .catch(err => next(err));
}
/**
 * Creates a new user
 */
export function create(req, res, next) {
  var newUser = new User(req.body);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.saveAsync()
    .spread(function(user) {
      var token = jwt.sign({ _id: user._id }, config.secrets.session, {
        expiresIn: 60 * 60 * 5
      });
      res.json({ token });
    })
    .catch(validationError(res));
}


/**
 * Deletes a user
 * restriction: 'admin'
 */
export function destroy(ctx, next) {
  User.findByIdAndRemoveAsync(req.params.id)
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}

/**
 * Change a users password
 */
export function changePassword(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  User.findByIdAsync(userId)
    .then(user => {
      if (user.authenticate(oldPass)) {
        user.password = newPass;
        return user.saveAsync()
          .then(() => {
            res.status(204).end();
          })
          .catch(validationError(res));
      } else {
        return res.status(403).end();
      }
    });
}

/**
 * Get my info
 */
export function me(req, res, next) {
  var userId = req.user._id;

  User.findOneAsync({ _id: userId }, '-salt -password')
    .then(user => { // don't ever give out the password or salt
      if (!user) {
        return res.status(401).end();
      }
      res.json(user);
    })
    .catch(err => next(err));
}

/**
 * Authentication callback
 */
export function authCallback(req, res, next) {
  res.redirect('/');
}
