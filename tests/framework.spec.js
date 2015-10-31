import assert from 'assert';

describe('(Framework) Karma Plugins', function () {
  it('Should expose "expect" globally.', function () {
    assert.equal(typeof expect, 'function');
  });

  it('Should expose "should" globally.', function () {
    assert.equal(typeof should, 'object');
  });

  it('Should have chai-as-promised helpers.', function () {
    const pass = new Promise(res => res('test'));
    const fail = new Promise((res, rej) => rej());

    return Promise.all([
      expect(pass).to.be.fulfilled,
      expect(fail).to.not.be.fulfilled
    ]);
  });
});
