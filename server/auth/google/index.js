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
  .get('/callback', passport.authenticate('google', {
    failureRedirect: '/signup',
    session: false
  }), setTokenCookie);

export default router;
