import Router from 'koa-router';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

const router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.put('/me/password', auth.isAuthenticated(), controller.changePassword);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

export default router;
