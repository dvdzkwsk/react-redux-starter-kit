import RuleRoute from 'routes/Rule'

describe('(Route) Rule', () => {
  let _route

  beforeEach(() => {
    _route = RuleRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `rule`', () => {
    expect(_route.path).to.equal('rule')
  })
})
