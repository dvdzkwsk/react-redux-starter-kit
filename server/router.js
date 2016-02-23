import Router from 'koa-router';
import thing from './api/thing';
import auth from './auth';

const router = new Router();

router.use('/api/things', thing.routes(), thing.allowedMethods());

router.use('/auth', auth.routes(), auth.allowedMethods());

export default router;
