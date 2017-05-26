import HomeRoute from 'routes/Home'

describe('(Route) Home', () => {
  let _component

  beforeEach(() => {
    _component = HomeRoute.component()
  })

  it('Should return a route configuration object', () => {
    expect(typeof HomeRoute).toEqual('object')
  })

  it('Should define a route component', () => {
    expect(_component.type).toEqual('div')
  })
})
