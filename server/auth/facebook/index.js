import Router from 'koa-router';
import passport from 'koa-passport';
import { setTokenCookie } from '../auth.service';

const router = new Router();

router
  .get('/', passport.authenticate('facebook', {
    scope: ['email', 'user_about_me'],
    failureRedirect: '/signup',
    session: false
  }))
  .get('/callback', function (ctx, next) {
    return passport.authenticate('facebook', {
      failureRedirect: '/signup',
      session: false
    }, function (user, info, status) {
      ctx.state = { user };

      return setTokenCookie(ctx, next);
    })(ctx, next);
  });


export default router;
