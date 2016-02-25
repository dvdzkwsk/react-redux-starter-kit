import Router from 'koa-router';
import passport from 'koa-passport';
import { setTokenCookie } from '../auth.service';

const router = new Router();

router
  .get('/', passport.authenticate('google', {
    scope: ['email', 'profile'],
    failureRedirect: '/signup',
    session: false
  }))
  .get('/callback', function(ctx, next) {
    return passport.authenticate('google', {
      failureRedirect: '/signup',
      session: false
    }, function(user, info, status) {
      ctx.state = { user };

      return setTokenCookie(ctx, next);
    })(ctx, next);
  });

export default router;
