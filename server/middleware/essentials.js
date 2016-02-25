import bodyParser from 'koa-bodyparser'
import passport from 'koa-passport';

export default function (app) {
  app.use(bodyParser())
  app.use(passport.initialize())
}
