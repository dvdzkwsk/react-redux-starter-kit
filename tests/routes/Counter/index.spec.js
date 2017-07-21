import CounterRoute from 'routes/Counter'

describe('(Route) Counter', () => {
  it('returns a route configuration object', () => {
    expect(typeof CounterRoute({})).toBe('object')
  })

  it('has a path \'counter\'', () => {
    expect(CounterRoute({}).path).toBe('counter')
  })
})
