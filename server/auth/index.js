import Router from 'koa-router';
import passport from 'passport';
import config from '../../config';
import User from '../api/user/user.model';
import { setup as localPassportSetup } from './local/passport';
import { setup as facebookPassportSetup } from './facebook/passport';
import localAuth from './local';
import facebookAuth from './facebook';

// Passport Configuration
localPassportSetup(User, config);
facebookPassportSetup(User, config);
// require('./local/passport').setup(User, config);
// require('./facebook/passport').setup(User, config);
// require('./google/passport').setup(User, config);
// require('./twitter/passport').setup(User, config);

const router = new Router();

router.use('/local', localAuth.routes(), localAuth.allowedMethods());
router.use('/facebook', facebookAuth.routes(), facebookAuth.allowedMethods());
// router.use('/facebook', require('./facebook'));
// router.use('/twitter', require('./twitter'));
// router.use('/google', require('./google'));

export default router;
