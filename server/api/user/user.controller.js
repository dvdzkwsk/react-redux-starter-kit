import User from './user.model';
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
    const users = await User.find({}, '-salt -password');
    respondWithResult(ctx)(users);
  } catch (err) {
    handleError(ctx)(err);
  }
}

/**
 * Get a single user
 */
export async function show(ctx, next) {
  try {
    const user = await User.findById(ctx.params.id);
    if (!user) return handleResourceNotFound(ctx)('user');
    respondWithResult(ctx)(user);
  } catch (err) {
    handleError(ctx)(err);
  }
}

/**
 * Creates a new user
 */
export async function create(ctx, next) {
  try {
    let newUser = new User(ctx.request.body);
    newUser.provider = 'local';
    newUser.role = 'user';

    await newUser.save();
    const token = jwt.sign({ 
      _id: user._id 
    }, config.secrets.session, {
      expiresIn: 60 * 60 * 5
    });

    respondWithResult(ctx)({ token });
  } catch (err) {
    validationError(ctx)(err);
  }
}

/**
 * Deletes a user
 * restriction: 'admin'
 */
export async function destroy(ctx, next) {
  try {
    const user = await User.findById(ctx.params.id);
    if (!user) return handleResourceNotFound(ctx)('user');

    await user.remove();

    respondWithResult(ctx, 204)();
  } catch (err) {
    handleError(ctx)(err);
  }
}

/**
 * Change a users password
 */
export async function changePassword(ctx, next) {
  const userId = ctx.user._id;
  const oldPass = String(ctx.request.body.oldPassword);
  const newPass = String(ctx.request.body.newPassword);

  try {
    let user = await User.findById(userId);

    if (user.authenticate(oldPass)) {
      user.password = newPass;
      await user.save();

      respondWithResult(ctx, 204)();
    } else {
      ctx.status = 403;
    }
  } catch (err) {
    validationError(ctx)(err);
  }
}

/**
 * Get my info
 */
export async function me(ctx, next) {
  const userId = ctx.state.user._id;

  try {
    const me = await User.findOne({ _id: userId }, '-salt -password');
    
    respondWithResult(ctx)(me);
  } catch (err) {
    console.log(err);
    handleError(ctx)(err);
  }
}

/**
 * Authentication callback
 */
export async function authCallback(ctx, next) {
  ctx.redirect('/');
}
