import Router from 'koa-router';
import passport from 'koa-passport';
import { signToken } from '../auth.service';

const router = new Router();

router.post('/', function(ctx, next) {
  return passport.authenticate('local', function(user, info, status) {
    var error = err || info;
    if (error) {
      return res.status(401).json(error);
    }
    if (!user) {
      return res.status(404).json({message: 'Something went wrong, please try again.'});
    }

    var token = signToken(user._id, user.role);
    res.json({ token });
  })(ctx, next)
});


app.use(route.post('/custom', function(ctx, next) {
  return passport.authenticate('local', function(user, info, status) {
    if (user === false) {
      ctx.status = 401
      ctx.body = { success: false }
    } else {
      ctx.body = { success: true }
      return ctx.login(user)
    }
  })(ctx, next)
}))

export default router;
