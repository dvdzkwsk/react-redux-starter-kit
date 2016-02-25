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
  .get('/callback', passport.authenticate('facebook', {
    failureRedirect: '/signup',
    session: false
  }), setTokenCookie);

export default router;
