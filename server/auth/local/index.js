import Router from 'koa-router'
import passport from 'koa-passport'
import { signToken } from '../auth.service'

const router = new Router()

router.post('/', function (ctx, next) {
  return passport.authenticate('local', function (user, info, status) {
    if (!user) {
      ctx.status = 404
      return ctx.body = {
        message: 'Something went wrong, please try again.'
      }
    }

    const token = signToken(user._id, user.role)
    ctx.body = { token }
  })(ctx, next)
})

export default router
