import Router from 'koa-router';
<<<<<<< HEAD
=======
import passport from 'passport';
>>>>>>> 81a2d2237084ce13094288921fec8bb09b9325b1
import config from '../../config';
import User from '../api/user/user.model';

// Passport Configuration
require('./local/passport').setup(User, config);
require('./facebook/passport').setup(User, config);
require('./google/passport').setup(User, config);
require('./twitter/passport').setup(User, config);

<<<<<<< HEAD
const router = new Router();
=======
var router = express.Router();
>>>>>>> 81a2d2237084ce13094288921fec8bb09b9325b1

router.use('/local', require('./local'));
router.use('/facebook', require('./facebook'));
router.use('/twitter', require('./twitter'));
router.use('/google', require('./google'));

export default router;
