module.exports = function loggerMiddleware () {
  return function *loggerMiddleware (next) {
    const start = new Date();

    yield next;

    const ms = new Date() - start;
    console.log('%s %s - %sms', this.method, this.url, ms);
  };
};
