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
// TODO: there's a cleaner way to do this. The reason we're using the
// compiled .html file is so that we don't have to worry about query strings
// on generated assets.
const template = fs.readFileSync(paths.dist('client/index.html'), 'utf-8')
  .replace(
    '<div id="root"></div>',
    [
      '<div id="root">${content}</div>',
      '<script>window.__INITIAL_STATE__ = ${initialState}</script>'
    ].join('')
  );

app.use(require('./middleware/render-route')(template));

export default app;
