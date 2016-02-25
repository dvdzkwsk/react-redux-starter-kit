import Router from 'koa-router'
import thing from './api/thing'
import user from './api/user'
import auth from './auth'

const router = new Router()

router.use('/api/things', thing.routes(), thing.allowedMethods())
router.use('/api/users', user.routes(), user.allowedMethods())

router.use('/auth', auth.routes(), auth.allowedMethods())

export default router
