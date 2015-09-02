// ------------------------------------
// Credit to https://github.com/koajs/koa-gzip
// Package is unmaintained so porting it for maintainability.
// ------------------------------------
import zlib     from 'zlib';
import thunkify from 'thunkify';

const gzip = thunkify(zlib.gzip);

export default function createGzipMiddleware (options) {
  options = options || {};
  options.minLength = options.minLength || 150;

  return function *gzipMiddleware (next) {
    var body, buffer;

    yield next;

    // Return noop if the response is not 200, the request does not accept
    // gzip encoding, or if a content-encoding header is already present.
    if (
      this.status !== 200 ||
      this.acceptsEncodings('gzip') !== 'gzip' ||
      this.response.header['content-encoding']
    ) {
      return;
    }

    // Support streams
    if (typeof this.body.pipe === 'function') {
      this.set('content-encoding', 'gzip');
      this.remove('content-length');
      this.body = this.body.pipe(zlib.createGzip());
      return;
    }

    // Convert response body to a Buffer
    if (typeof this.body === 'string') {
      buffer = new Buffer(this.body);
    } else if (!Buffer.isBuffer(this.body)) {
      buffer = new Buffer(JSON.stringify(this.body));
    }

    // Compress and return noop if body length is smaller than minimum
    body = yield gzip(buffer);
    if (body.length < options.minLength) {
      return;
    }

    this.set('content-encoding', 'gzip');
    this.body = body;
  };
}
