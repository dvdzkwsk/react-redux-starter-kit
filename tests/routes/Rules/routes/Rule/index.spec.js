import { EditRoute, CreateRoute } from 'routes/Rules/routes/Rule'

describe('(Route) EditRoute', () => {
  let _route

  beforeEach(() => {
    _route = EditRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `:id`', () => {
    expect(_route.path).to.equal(':id')
  })
})

describe('(Route) CreateRoute', () => {
  let _route

  beforeEach(() => {
    _route = CreateRoute({})
  })

  it('Should return a route configuration object', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `new`', () => {
    expect(_route.path).to.equal('new')
  })
})
