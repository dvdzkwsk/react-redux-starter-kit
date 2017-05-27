import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('h4')
    expect(welcome.length).toBeGreaterThan(0)
    expect(welcome.text()).toMatch(/Welcome!/)
  })

  it('Renders an awesome duck image', () => {
    const duck = _component.find('img')
    expect(duck.length).toBeGreaterThan(0)
    expect(duck.attr('alt')).toMatch(/This is a duck, because Redux!/)
  })
})
