import config from '../../config';
import jwt from 'jsonwebtoken';
import koaJwt from 'koa-jwt';
import compose from 'koa-compose';
import convert from 'koa-convert';
import User from '../api/user/user.model';

const validateJwt = convert(koaJwt({
  secret: config.secrets_session
}));

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
export function isAuthenticated () {
  function authentication (ctx, next) {
    // allow access_token to be passed through query parameter as well
    if (ctx.query && ctx.query.hasOwnProperty('access_token')) {
      ctx.headers.authorization = `Bearer ${ctx.query.access_token}`;
    }

    // validate jwt
    return validateJwt(ctx, next);
  }

  async function attachUserToContext (ctx, next) {
    try {
      const user = await User.findById(ctx.state.user._id);

      if (!user) {
        return ctx.status = 403;
      }

      ctx.state.user = user;
      return next();
    } catch (err) {
      return next(err);
    }

  }

  return compose([authentication, attachUserToContext]);
}

/**
 * Checks if the user role meets the minimum requirements of the route
 */
export function hasRole (roleRequired) {
  if (!roleRequired) {
    throw new Error('Required role needs to be set');
  }

  function meetsRequirements (ctx, next) {
    if (config.user_roles.indexOf(ctx.state.user.role) >=
        config.user_roles.indexOf(roleRequired)) {
      return next();
    } else {
      ctx.status = 403;
      ctx.body = { message: 'Forbidden' };
    }
  }

  return compose([isAuthenticated(), meetsRequirements]);
}

/**
 * Returns a jwt token signed by the app secret
 */
export function signToken (id, role) {
  return jwt.sign({ _id: id, role: role }, config.secrets_session, {
    expiresIn: 60 * 60 * 5
  });
}

/**
 * Set token cookie directly for oAuth strategies
 */
export function setTokenCookie (ctx, next) {
  if (!ctx.state.user) {
    ctx.status = 404;
    return ctx.body = {
      message: "It looks like you aren't logged in, please try again."
    };
  }

  const token = signToken(ctx.state.user._id, ctx.state.user.role);
  ctx.cookies.set('token', token);
  ctx.redirect('/');
}
