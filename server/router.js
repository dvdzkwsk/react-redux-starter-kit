import Router from 'koa-router';
import thing from './api/thing';

const router = new Router();

router.use('/api/things', thing.routes(), thing.allowedMethods());

export default router;
