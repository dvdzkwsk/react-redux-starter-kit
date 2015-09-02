import fs     from 'fs';
import koa    from 'koa';
import serve  from 'koa-static';
import config from '../config';

const paths = config.get('utils_paths');
const app   = koa();

// ------------------------------------
// Response Time Header and Logging
// ------------------------------------
app.use(require('./middleware/gzip')());
app.use(require('./middleware/response-time'));
app.use(require('./middleware/logger'));

// ------------------------------------
// Static File Middleware
// ------------------------------------
app.use(serve(paths.dist('client'), {
  index : '__IGNORE_INDEX.HTML__'
}));

// ------------------------------------
// View Rendering
// ------------------------------------
const template = fs.readFileSync(paths.dist('client/index.html'), 'utf-8')
  .replace('<div id="root"></div>', '<div id="root">${content}</div>');

app.use(require('./middleware/render-route')(template));

export default app;
