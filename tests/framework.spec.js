import assert from 'assert'

describe('(Framework) Karma Plugins', function () {
  it('Should expose "expect" globally.', function () {
    assert.ok(expect)
  })

  it('Should expose "should" globally.', function () {
    assert.ok(should)
  })

  it('Should have chai-as-promised helpers.', function () {
    const pass = new Promise(res => res('test'))
    const fail = new Promise((res, rej) => rej())

    return Promise.all([
      expect(pass).to.be.fulfilled,
      expect(fail).to.not.be.fulfilled
    ])
  })
})
