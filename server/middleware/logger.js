export default function *loggerMiddleware (next) {
  const start = new Date();

  yield next;

  const ms = new Date() - start;
  console.log('%s %s - %sms', this.method, this.url, new Date() - start);
}
