import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView />)
  })

  it('Renders a welcome message', () => {
    const welcome = _component.find('p')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Welcome/)
  })

  // TODO test for create and edit rule links
})
