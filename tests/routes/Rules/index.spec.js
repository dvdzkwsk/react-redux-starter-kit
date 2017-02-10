import RulesRoute from 'routes/Rules'

describe('(Route) Rules', () => {
  let _route

  beforeEach(() => {
    _route = RulesRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `rules`', () => {
    expect(_route.path).to.equal('rules')
  })
})
