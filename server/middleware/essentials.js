import convert from 'koa-convert';
import bodyParser from 'koa-bodyparser';

export default function (app) {
  app.use(bodyParser());
}
