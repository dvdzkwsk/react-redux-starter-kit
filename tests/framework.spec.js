import assert from 'assert';

describe('(Framework) Karma Plugins', function () {
  it('Should expose "expect" globally.', function () {
    assert.equal(typeof expect, 'function');
  });

  it('Should expose "should" globally.', function () {
    assert.equal(typeof should, 'object');
  });

  it('Should have Chai as Promised helpers.', function () {
    const promise = new Promise(res => res('test'));

    return Promise.all([
      expect(promise).to.be.fulfilled,
      promise.should.become('test')
    ]);
  });
});
